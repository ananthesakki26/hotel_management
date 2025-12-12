const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");


router.post("/", async (req, res) => {
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ message: "Booking saved!" });
});


router.get("/", async (req, res) => {
    const bookings = await Booking.find();
    res.json(bookings);
});


router.put("/:id", async (req, res) => {
   await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message :"Updated Sucessfully"});
});


router.delete("/:id", async (req, res) => {
  
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted!" });
});

module.exports = router;
