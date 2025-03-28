const mongoose = require("mongoose");

const connectToDb = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => console.log(error));
};

module.exports = connectToDb;
