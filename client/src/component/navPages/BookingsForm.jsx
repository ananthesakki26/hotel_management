import axios from "axios";
import { useState } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { bookingFormValidation } from "../../utiles/validation";

export default function BookingsForm() {
  const { roomType } = useParams();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    checkInDate: "",
    checkOutDate: "",
    roomType: roomType || "",
    numberOfGuests: "",
    specialRequests: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = bookingFormValidation(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      await axios.post("http://localhost:5000/api/bookings", formData);
      alert("Booking Saved!");

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        checkInDate: "",
        checkOutDate: "",
        roomType: roomType || "",
        numberOfGuests: "",
        specialRequests: "",
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Card className="p-4 shadow" style={{ width: "700px" }}>
        <h3
          className="text-center mb-4"
          style={{ fontFamily: "Acme, sans-serif", fontWeight: 200 }}
        >
          Hotel Booking Form
        </h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
            />
            {errors.fullName && (
              <small className="text-danger">{errors.fullName}</small>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
            {errors.phoneNumber && (
              <small className="text-danger">{errors.phoneNumber}</small>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Check-in Date</Form.Label>
            <Form.Control
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
            />
            {errors.checkInDate && (
              <small className="text-danger">{errors.checkInDate}</small>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Check-out Date</Form.Label>
            <Form.Control
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
            />
            {errors.checkOutDate && (
              <small className="text-danger">{errors.checkOutDate}</small>
            )}
          </Form.Group>

          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Room Type"
            className="mb-3"
          >
            <Form.Select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
            >
              <option value="">Select Room Type</option>
              <option value="Standard Room">Standard Room</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Premium Room">Premium Room</option>
              <option value="Sea View Room">Sea View Room</option>
              <option value="Garden View Room">Garden View Room</option>
              <option value="Pool View Room">Pool View Room</option>
              <option value="Mountain View Room">Mountain View Room</option>
              <option value="City View Room">City View Room</option>
              <option value="Lake View Suite">Lake View Suite</option>
            </Form.Select>
            {errors.roomType && (
              <small className="text-danger">{errors.roomType}</small>
            )}
          </FloatingLabel>

          <Form.Group className="mb-3">
            <Form.Label>Number of Guests</Form.Label>
            <Form.Control
              type="number"
              name="numberOfGuests"
              min="1"
              max="10"
              value={formData.numberOfGuests}
              onChange={handleChange}
            />
            {errors.numberOfGuests && (
              <small className="text-danger">{errors.numberOfGuests}</small>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Special Requests</Form.Label>
            <Form.Control
              as="textarea"
              name="specialRequests"
              rows={3}
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Any additional requests"
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Book Now
          </Button>
        </Form>
      </Card>
    </div>
  );
}
