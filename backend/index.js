import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();


const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser()) //allow us to parse incoming cookies

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDb();
  console.log("Server is running on port " + port);
});
