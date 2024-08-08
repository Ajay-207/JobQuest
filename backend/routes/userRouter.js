import express from "express";
import { login, register, logout, getUser, } from '../controllers/userControllers.js';
import { isAuthenticated } from "../middlewares/auth.js";

const router= express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/getuser", isAuthenticated, getUser);



export default router