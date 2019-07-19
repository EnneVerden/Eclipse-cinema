const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  avatar: {
    type: String,
    default: "https://image.flaticon.com/icons/svg/236/236831.svg"
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: "user"
  },
  tickets: {
    type: Array,
    default: []
  },
  removeRequest: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model("user", UserSchema);

module.exports = { User };
