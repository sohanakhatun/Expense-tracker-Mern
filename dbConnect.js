const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sohanakhatun16:expense-tracker-mern@cluster-expense-tracker.jmjjtdz.mongodb.net/expense-tracker-db", { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on("error", (err) => console.log(err));

connection.on("connected", () =>
  console.log("Mongo DB Connection Successfull")
);
