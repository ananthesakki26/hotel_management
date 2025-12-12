const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  email: String,
  phone: String,
  feedback: String
});

module.exports = mongoose.model("Contact", contactSchema);
