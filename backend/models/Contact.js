const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  email: String, 
  phone: Number, 
  feedback: String, 

})

module.exports = mongoose.model("Contact", contactSchema);
