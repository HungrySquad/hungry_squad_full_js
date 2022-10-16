import { hash } from "bcryptjs";
import { User, userJoiSchema } from "../db/models";

export const findUserInfo = async (id:any) => {
  const userInfo = await User.findById(id, "-__v");
  return userInfo;
};

export const deleteUser = async (id:any) => {
  const deletedUser = await User.findByIdAndDelete(id);
  return deletedUser;
};

export const updateUserPassword = async (newPassword:string, oldUserInfo:any) => {
  await userJoiSchema.validateAsync({
    email: oldUserInfo.email, password: newPassword,
  });
  oldUserInfo.password = await hash(newPassword, 10);
  const newUserInfo = await oldUserInfo.save();
  return newUserInfo;
};

