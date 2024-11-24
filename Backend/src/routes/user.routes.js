import { Router } from "express";
import {verifyJWT} from "../middlewares/auth.middleware.js";
import {getCurrentUser, loginUser, logoutUser, registerUser} from "../controllers/user.controller.js"

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/user").get(verifyJWT, getCurrentUser)

router.route("/logout").post(verifyJWT, logoutUser);

export default router;