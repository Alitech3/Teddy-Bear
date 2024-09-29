const mongoose = require("mongoose");

// Define the schema for a student
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

// Create a model using the schema
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
