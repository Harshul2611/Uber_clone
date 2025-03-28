const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const connectToDb = require("./db/mongodb");
connectToDb();

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.end("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
