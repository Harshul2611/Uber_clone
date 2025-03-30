const express = require("express");
const userRouter = express.Router();
const { body } = require("express-validator");
const {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
} = require("../controllers/user.controllers");
const authUser = require("../middlewares/auth.middleware");

userRouter.post(
  "/api/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long"),
  ],
  registerUser
);

userRouter.post(
  "/api/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be minimum 6 characters long"),
  ],
  loginUser
);

userRouter.get("/api/profile", authUser, getUserProfile);
userRouter.get("/api/logout", authUser, logoutUser);

module.exports = userRouter;
