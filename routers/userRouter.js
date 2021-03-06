import express from "express";
import { changePassword, editProfile, userDetail } from "../controllers/userController";
import routes from "../routes";

export const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
