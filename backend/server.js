const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config();

const userRouter = require("./routes/user.routes");
const captainRouter = require("./routes/captain.routes");

const connectToDb = require("./db/mongodb");
connectToDb();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 3000;

app.use("/users", userRouter);
app.use("/captains", captainRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
