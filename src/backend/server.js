import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import propertyRoutes from "./routes/properties.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/properties", propertyRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongDB connected"))
  .catch((err) => console.err(err));

app.listen(5000, () => {
  console.log("PORT:5000 is activated.");
});
