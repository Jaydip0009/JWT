const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  title:  String,
  price:  Number,
  rating:  Number,
});

const User = mongoose.model("user", userSchema);
module.exports = User;