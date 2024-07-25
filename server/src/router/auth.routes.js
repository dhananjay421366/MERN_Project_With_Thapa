import { Router } from "express";
import { CurrentUser, login, logout, Register } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(Register);
router.route("/login").post(login);
router.route("/logout").post(verifyJWT,logout);
router.route("/current-user").get(verifyJWT,CurrentUser);
export default router;
