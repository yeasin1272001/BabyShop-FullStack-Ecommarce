import express from "express";
import {
  loginUser,
  registerUser,
  userProfile,
} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/profile", userProfile);

export default router;
