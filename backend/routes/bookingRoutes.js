const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.get("/all", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});



module.exports = router;
