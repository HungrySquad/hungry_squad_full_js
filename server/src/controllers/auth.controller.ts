import { Request, Response } from "express";
import { compare } from "bcryptjs";
import { userJoiSchema } from "../db/models/index";

import {
  saveUser, findUser, signJWT, generateUserPassword, sendNewPasswordToEmail,
} from "../services/authService";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password, gender } = req.body;
  await userJoiSchema.validateAsync({
    email, password
  });

  const genders = ["male", "female", "other", "not-say"];
  if (genders.indexOf(gender) === -1) {
    return res.status(400).json({ message: `Please specify 'gender' parameter. It can be '${genders.join(", ")}'` });
  }

  const savedUser = await saveUser(email, password, gender);
  if (!savedUser) {
    throw new Error();
  }

  return res.json({ message: "Profile created successfully" });
};

export const loginUser = async (req: Request, res: Response) => {
  const user = await findUser(req.body.email);
  if (!user) {
    return res.status(400).json({ message: "User does not exist" });
  }
  if (await compare(String(req.body.password), String(user.password))) {
    const jwtToken = signJWT(user._id, user.email, user.gender);
    return res.json({ jwt_token: jwtToken });
  }
  return res.status(403).json({ message: "Wrong password" });
};

export const forgotPasswordUser = async (req: Request, res: Response) => {
  const user = await findUser(req.body.email);
  if (!user) {
    return res.status(400).json({ message: "User does not exist" });
  }
  const newPassword = await generateUserPassword(user);
  sendNewPasswordToEmail(req.body.email, newPassword);
  return res.json({ message: "New password sent to your email address" });
};