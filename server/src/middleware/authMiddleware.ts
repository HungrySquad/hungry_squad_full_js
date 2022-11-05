import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey: string = process.env.SECRET_KEY as string;

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(401)
      .json({ message: "Please, provide authorization header" });
  }

  const [, token] = authorization.split(" ");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Please, include token to request" });
  }

  try {
    const tokenPayload = verify(token, secretKey) as any;
    (req as any).user = {
      userId: tokenPayload.userId,
      email: tokenPayload.email,
      gender: tokenPayload.gender
    };
    return next();
  } catch (err: any) {
    return res.status(401).json({ message: err.message });
  }
};
