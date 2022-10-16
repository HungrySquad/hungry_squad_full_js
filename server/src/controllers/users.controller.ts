import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { findUserInfo, deleteUser, updateUserPassword } from "../services/usersService";

export const getUserInfo = async (req:Request, res:Response) => {
  const userInfo = await findUserInfo(( req as any).user.userId);
  if (!userInfo) {
    return res.status(400).json({ message: "User does not exist" });
  }
  const {
    _id, gender, email
  } = userInfo;
  return res.json({
    user: {
      _id, gender, email
    },
  });
};

export const deleteUserInfo = async (req:Request, res:Response) => {
  const deletedUser = await deleteUser(( req as any).user.userId);
  if (!deletedUser) {
    return res.status(400).json({ message: "User does not exist" });
  }
  return res.json({ message: "Profile deleted successfully" });
};


export const updateUserInfo = async (req:Request, res:Response) => {
  const oldUserInfo = await findUserInfo(( req as any ).user.userId);
  if (!oldUserInfo) {
    return res.status(400).json({ message: "User does not exist" });
  }
  const { oldPassword, newPassword } = req.body;
  if (await compare(String(oldPassword), String(oldUserInfo.password))) {
    const newUserInfo = await updateUserPassword(newPassword, oldUserInfo);
    if (!newUserInfo) {
      throw new Error();
    }
    return res.json({ message: "Password changed successfully" });
  }
  return res.status(400).json({ message: "Wrong old password" });
};