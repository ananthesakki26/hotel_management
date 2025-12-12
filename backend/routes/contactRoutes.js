const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");



router.post("/", async (req, res) => {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: "Contact saved!" });
});



router.get("/", async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});


router.put("/:id", async (req, res) => {
   await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message:"Updated Succesufully" });
});


router.delete("/:id", async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted!" });
});

module.exports = router;
