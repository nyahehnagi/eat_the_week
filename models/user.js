const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
},
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {

  const hash = await bcrypt.hash(this.password, saltRounds);

  this.password = hash;
  next();
});

UserSchema.pre("updateOne", async function (next) {

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
