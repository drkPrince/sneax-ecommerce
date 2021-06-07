import express from "express";
import { protectRoutes } from "../middleware/authMiddleware.js";
import {
	createOrder,
	getUsersOrders,
	createCheckoutSession,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/").post(protectRoutes, createOrder);
router.route("/").get(protectRoutes, getUsersOrders);
router.route("/create-checkout-session").post(createCheckoutSession);

export default router;
