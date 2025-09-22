import express from "express";
import upload from "../middlewares/multer.js";
import { getAllDoctorsController } from "../controller/doctorController.js";

const doctorRouter = express.Router();
doctorRouter.get("/get-all-doctor", getAllDoctorsController);

export default doctorRouter;
