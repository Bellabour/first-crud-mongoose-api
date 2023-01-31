require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const salt = 10;
const JWT_SECRET = process.env.jwt;

mongoose.set("strictQuery", false);
audoIndex: true;
mongoose.connect(process.env.DATABASE_URL, () => {
  console.log("Connected to MongoDB");
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", (error) => console.log("Connected to Database"));

app.set("view enginer", "ejs");
app.use(express.json());
app.use(express.static("public"));

app.use(express.json()); //allows server to accept json

const usersRouter = require("./routes/users"); //setting where you get routes from
app.use("/users", usersRouter); //setting how you access users on the website

app.listen(3000, () => console.log("Server Started"));
