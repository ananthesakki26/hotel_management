import React from "react";
import { Button } from "react-bootstrap";
import "./whole.css";
import BackgroundImage from "../assets/hotel-Background.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate(); 
  return (
    <div>
      <div className="hotel-img">
        <img
          src={BackgroundImage}
          alt="HotelImage"
          className="img-fluid w-100 "
          style={{ height: 400 }}
        />

        <h2
          className="position-absolute text-white "
          style={{
            top: "27%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "Acme, sans-serif",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: "30px",
          }}
        >
          Welcome to Your Home Away From Home.
        </h2>
      </div>

      <div
        className="position-absolute w-100 d-flex justify-content-center gap-3 d-none d-md-flex"
        style={{ top: "50%" }}
      >
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/book")}
        >
          Book Now
        </Button>

        <Button
          variant="outline-light"
          size="lg"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}
