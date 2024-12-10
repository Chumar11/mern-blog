import express from "express";
import { userFunction } from "../contollers/user.controller.js";

const router = express.Router();
router.post("/", userFunction);

export default router;
