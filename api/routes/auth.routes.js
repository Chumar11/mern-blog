import express from "express";
import { signin, signup, countgoogle } from "../contollers/auth.controller.js";
// import { googleAuth } from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", countgoogle);

export default router;
