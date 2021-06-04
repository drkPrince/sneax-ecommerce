import express from "express";
import { protectRoutes } from "../middleware/authMiddleware.js";
import { createOrder, getUsersOrders } from "../controllers/orderController.js";

const router = express.Router();

router.route("/").post(protectRoutes, createOrder);

router.route("/").get(protectRoutes, getUsersOrders);

export default router;
