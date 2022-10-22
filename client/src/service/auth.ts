import { IUser } from "../interfaces/user";

export interface ILogin {
  jwt_token: string;
}

class UserAPI {
  public async login(
    email: IUser["email"],
    password: IUser["password"]
  ): Promise<false | ILogin> {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      return response.json();
    } catch (e) {
      return false;
    }
  }

  public async register(
    email: IUser["email"],
    password: IUser["password"],
    gender: IUser["gender"]
  ) {
    try {
      await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          gender,
        }),
      });

      return true;
    } catch (e) {
      return false;
    }
  }
}

const userAPI = new UserAPI();

export default userAPI;
