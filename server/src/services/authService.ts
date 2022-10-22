import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { createTransport } from "nodemailer";
import { Types } from "mongoose";
import dotenv from "dotenv";
import crypto from "node:crypto";

import { User } from "../db/models";

dotenv.config();
const secretKey: string = (process.env.SECRET_KEY as string) || "secretKey";

export const saveUser = async (
  email: string,
  password: string,
  gender: string
) => {
  const user = new User({
    email,
    password: await hash(password, 10),
    gender
  });

  const savedUser = await user.save();

  return savedUser;
};

export const findUser = async (email: string) => {
  const user = await User.findOne({ email });
  return user;
};

export const signJWT = (id: Types.ObjectId, email: string, gender: string) => {
  const payload = { userId: id, email, gender };
  const jwtToken = sign(payload, secretKey);
  return jwtToken;
};

export const generatePassword = () => {
  const password = crypto.randomBytes(10).toString("hex");
  return password;
};

export const generateUserPassword = async (user: any) => {
  const newPassword = generatePassword();
  user.password = await hash(newPassword, 10);
  const updatedUser = await user.save();
  if (!updatedUser) {
    throw new Error();
  }
  return newPassword;
};

export const sendNewPasswordToEmail = (userEmail: string, password: string) => {
  const transporter = createTransport({
    service: "hotmail",
    auth: {
      user: "hungry_squad@outlook.com",
      pass: "HungrySquad123"
    }
  });
  const options = {
    from: "hungry_squad@outlook.com",
    to: userEmail,
    subject: "NEW PASSWORD",
    text: password
  };
  const sendedMail = transporter.sendMail(options, (err: any) => {
    if (err) {
      throw new Error();
    }
  });
  return sendedMail;
};
