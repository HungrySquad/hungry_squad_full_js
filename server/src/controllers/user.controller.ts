import { NextFunction, Request, Response } from "express";
import usersService from "./../services/user";
import ApiError from "../error/apiError";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await usersService.getAllUsers();

    return res.json({ users });
  } catch (e) {
    return next(ApiError.internal("Internal Error"));
  }
};
