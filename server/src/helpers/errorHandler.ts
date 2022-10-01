import { Request, Response, NextFunction } from "express";
import ApiError from "../error/apiError";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ success: false, message: err.message });
  }
  return res
    .status(500)
    .json({ success: false, message: "Something went wrong" });
};

export default errorHandler;
