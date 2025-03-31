const express = require("express");
const captainRouter = express.Router();
const { body } = require("express-validator");
const {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logoutCaptain,
} = require("../controllers/captain.controller");
const { authCaptain } = require("../middlewares/auth.middleware");

captainRouter.post(
  "/api/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be atleast 3 characters long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be atleast 3 characters long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be atleast 3 characters long"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Invalid vehicle Type"),
  ],
  registerCaptain
);

captainRouter.post(
  "/api/login",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Enter a strong password"),
  ],
  loginCaptain
);

captainRouter.get("/api/profile", authCaptain, getCaptainProfile);

captainRouter.get("/api/logout", authCaptain, logoutCaptain);

module.exports = captainRouter;
