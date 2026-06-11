import express from "express";
import { loginController, registerController } from "../controllers/auth.controller.js";

const router = express.Router();

// Register a User

router.post("/register", registerController);


// Login a User

router.post("/login", loginController);


export {router as authRouter}