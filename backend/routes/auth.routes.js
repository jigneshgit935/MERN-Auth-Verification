import express from "express";
import { Login, Logout, SignUp, verifyEmail } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", Login);

router.post("/signup", SignUp);

router.post("/logout", Logout);

router.post("/verify-email",verifyEmail)

export default router;
