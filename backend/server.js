const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const userRouter = require("./routes/user.routes");

const connectToDb = require("./db/mongodb");
connectToDb();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
