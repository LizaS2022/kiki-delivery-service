const mongoose = require("mongoose");

const { Schema } = mongoose;

const driverSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  driverLicense: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const Driver = mongoose.model("Driver", driverSchema);
module.exports = Driver;
