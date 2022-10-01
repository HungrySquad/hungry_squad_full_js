import { Types } from "mongoose";
import { User } from "../db/models";
import { IUser } from "../db/models/user";

interface IUserService {
  getAllUsers: () => Promise<
    (IUser &
      Required<{
        _id: Types.ObjectId;
      }>)[]
  >;
}

class UserService implements IUserService {
  async getAllUsers() {
    return User.find({});
  }
}

const userService = new UserService();

export default userService;
