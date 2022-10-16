import { Router } from "express";
import { getUserInfo, deleteUserInfo, updateUserInfo } from "../controllers/users.controller";
import{ authMiddleware } from "../middleware/authMiddleware";

const asyncWrapper = (controller: any) => (req:any, res:any, next:any) => controller(req, res, next).catch(next);

const router = Router();

router.get("/", authMiddleware, getUserInfo);
router.delete("/", authMiddleware, deleteUserInfo);
router.patch("/password", authMiddleware, asyncWrapper(updateUserInfo));

export default router;
