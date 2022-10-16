import { Router } from "express";
import { registerUser, loginUser, forgotPasswordUser } from "../controllers/auth.controller";

const asyncWrapper = (controller: any) => (req:any, res:any, next:any) => controller(req, res, next).catch(next);

const router = Router();

router.post("/register", asyncWrapper(registerUser));

router.post("/login", loginUser);

router.post("/forgot_password", forgotPasswordUser);

export default router;
