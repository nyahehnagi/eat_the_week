const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, saltRounds);

  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
