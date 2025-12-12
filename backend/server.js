const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const bookingRoutes = require("./routes/bookingRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/contacts", contactRoutes);

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/hotelDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Server Start
app.listen(5000, () => console.log("Server running on port 5000"));
