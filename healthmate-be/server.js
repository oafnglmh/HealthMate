import express from "express";
import cors from "cors";
import "dotenv/config";

import "./config/mysql.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// kết nối Cloudinary
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/admin", adminRouter);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
