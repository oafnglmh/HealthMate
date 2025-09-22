import express from "express";
import upload from "../middlewares/multer.js";
import { bookingDoctor } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/add-booking", bookingDoctor);

export default userRouter;
