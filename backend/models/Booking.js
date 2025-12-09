const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phoneNumber: String,
  checkInDate: String,
  checkOutDate: String,
  roomType: String,
  numberOfGuests: Number,
  specialRequests: String,
 });

module.exports = mongoose.model("Booking", bookingSchema);
