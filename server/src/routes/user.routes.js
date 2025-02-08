import { Router } from "express";
import {verifyJWT} from "../middlewares/auth.middleware.js";
import {getCurrentUser, loginUser, logoutUser, registerUser} from "../controllers/user.controller.js"
import { createBank } from "../middlewares/bank.middleware.js";
import {createFundraiser, getSingleFundraiser, getFundraisers} from '../controllers/fundraiser.controller.js';
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/user").get(verifyJWT, getCurrentUser)

router.route("/logout").post(verifyJWT, logoutUser);

router.route("/create-campaign").post(
    upload.fields([
      {
        name: "qrImage"
      },
      {
        name: "beneficiaryImage"
      }
    ]),
    verifyJWT,
    createBank,
    createFundraiser
  );
  
  router.route("/events").get(getFundraisers);

  router.route("/campaign/:slug").get(getSingleFundraiser);


export default router;