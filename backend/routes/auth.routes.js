import express from "express";
import {
  forgotPassword,
  Login,
  Logout,
  resetPassword,
  SignUp,
  verifyEmail,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", Login);

router.post("/signup", SignUp);

router.post("/logout", Logout);

router.post("/verify-email", verifyEmail);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

export default router;
