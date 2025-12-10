const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const contactRoutes = require("./routes/contactRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/hotelApp")
  .then(() =>
     console.log("MongoDB Connected "))
  .catch(err =>
     console.log("MongoDB Error ", err));

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/booking", bookingRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} `);
});
