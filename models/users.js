const { application } = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usersSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

usersSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.Password = await bcrypt.hash(this.Password, salt);
  next();
});

module.exports = mongoose.model("Users", usersSchema);
