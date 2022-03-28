const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirmPassword: {
    type: String,
  },
  firstName: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  dateOfBirth: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
