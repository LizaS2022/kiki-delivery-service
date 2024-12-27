const mongoose = require("mongoose");

const { Schema } = mongoose;
//May come back to thid.
// Will have to set up bcrypt for password encrypt later
const kitty = require("./Kitty");

const hoomanSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNum: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  creditCard: {
    type: String,
    required: true,
    trim: true,
  },
  usernme: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 8,
  },
  ssn: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  kitty: {
    type: Schema.Types.ObjectId,
    ref: "kitty",
  },
});

const Hooman = mongoose.model("Hooman", hoomanSchema);
module.exports = Hooman;
