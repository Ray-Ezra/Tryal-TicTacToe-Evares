//used for  importing the Mongoose library, 
const mongoose = require("mongoose");

//Whole function used  to connect to Mongo
const connectDB = async () => {
  try {
// Ensures to wait for the connection to be established
    await mongoose.connect("mongodb+srv://victorkimaru8:stvick.9028@cluster0.3clz1wb.mongodb.net/TicTacToe?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
//If the connection is successful message is returned
    console.log("MongoDB connected");
//If the connection is unsuccessful message is returned
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connectDB;
