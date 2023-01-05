let express = require("express");
let authRouter = express.Router();
let authController = require("./../controller/auth.con");
let validate = require("./../middleware/verifySignUp");
authRouter.post(
  "/signUp",
  [validate.checkDuplicateName, validate.checkRolesExisted],
  authController.signUp
);

authRouter.post("/signIn", authController.signIn);

module.exports = authRouter;
