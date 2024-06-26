const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("DB connection failed", error.message);
  }
};

dbConnect(); //to run the connection automatically with require(without module.exports)
