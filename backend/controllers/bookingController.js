const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
  try {
    const formData = req.body;

    const booking = new Booking(formData);
    await booking.save();

    res.status(201).json({ message: "Booking saved successfully " });
  } catch (error) {
    res.status(500).json({ message: "Server error " });
  }
};

module.exports = { createBooking };
