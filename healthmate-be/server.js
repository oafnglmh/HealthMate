import express from "express";
import cors from "cors";
import "dotenv/config";

const db = require("./config/mysql");
import connectCloudinary from "./config/cloudinary";
const app = express();
const port = process.env.PORT || 4000;
db();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//api
app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("Start server", port));
