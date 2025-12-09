const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const { email, phone, feedback } = req.body;

    const contact = new Contact({
      email,
      phone,
      feedback
    });

    await contact.save();

    res.status(201).json({ message: "Contact saved successfully " });
  } catch (error) {
    res.status(500).json({ message: "Server error " });
  }
};

module.exports = { createContact };
