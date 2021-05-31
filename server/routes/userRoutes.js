import express from "express";
import { protectRoutes } from "../middleware/authMiddleware.js";
const router = express.Router();

//controllers
import { getProfile, login, signup } from "../controllers/userController.js";

router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/profile").get(protectRoutes, getProfile);

export default router;
