import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World oosooso");
});

const port = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDb();
  console.log("Server is running on port " + port);
});
