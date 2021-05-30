import express from "express";
import { protectRoutes } from "../middleware/authMiddleware.js";
const router = express.Router();

//controllers
import {
	getProfile,
	login,
	signup,
	updateCart,
} from "../controllers/userController.js";

router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/profile").get(protectRoutes, getProfile);
router.route("/cart").put(protectRoutes, updateCart);

export default router;
