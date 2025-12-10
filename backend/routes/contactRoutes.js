const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const { createContact } = require("../controllers/contactController");


router.get("/all", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts" });
  }
});



module.exports = router;
