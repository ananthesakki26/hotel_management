import React from "react";
import { Badge, Button } from "react-bootstrap";
import standard from "../../assets/standard.jpg";
import deluxe from "../../assets/deluxe.jpg";
import premium from "../../assets/premium.jpg";
import seaView from "../../assets/seaView.jpg";
import gardenView from "../../assets/gardenView.jpg";
import poolView from "../../assets/poolView.jpg";
import mountainView from "../../assets/mountainView.jpg";
import cityView from "../../assets/cityView.jpg";
import lakeView from "../../assets/lakeView.jpg";
import { useNavigate } from "react-router-dom";
// import "./mediaQuery.css";
// import "./whole.css";

const Book = () => {
  const navigate = useNavigate();

  const handleBookNow = (roomType) => {
    navigate(`/booking/${roomType}`);
  };

  const rooms = [
    {
      id: 101,
      type: "Standard Room",
      price: "3,000",
      image: standard,
      description: "Basic amenities, cozy and comfortable.",
    },
    {
      id: 102,
      type: "Deluxe Room",
      price: "6,000",
      image: deluxe,
      description: "Extra space and premium amenities.",
    },
    {
      id: 103,
      type: "Premium Room",
      price: "9,000",
      image: premium,
      description: "Top-of-the-line luxury room.",
    },
    {
      id: 104,
      type: "Sea View Room",
      price: "5,000",
      image: seaView,
      description: "Room with a beautiful view of the sea.",
    },
    {
      id: 105,
      type: "Garden View Room",
      price: "4,000",
      image: gardenView,
      description: "Relax with a view of the hotel garden.",
    },
    {
      id: 106,
      type: "Pool View Room",
      price: "6,500",
      image: poolView,
      description: "Enjoy a private view of the pool.",
    },
    {
      id: 107,
      type: "Mountain View Room",
      price: "7,000",
      image: mountainView,
      description: "Scenic mountain view from your window.",
    },
    {
      id: 108,
      type: "City View Room",
      price: "3,500",
      image: cityView,
      description: "Comfortable room overlooking the city.",
    },
    {
      id: 109,
      type: "Lake View Suite",
      price: "8,500",
      image: lakeView,
      description: "Spacious suite with lake view.",
    },
  ];
  return (
    <div>
      <div className="container my-4">
        <div className="col">
          <h2
            className=" mb-4 text-black text-center"
            style={{
              fontFamily: "Acme, sans-serif",
              fontWeight: 200,
            }}
          >
            A calm and comfortable room awaits you.
            <br />
            <span className="fs-5 text-black">Showing deals</span>
          </h2>
        </div>
        <div className="row g-4">
          {rooms.map((room) => (
            <div key={room.id} className="col-12 col-sm-6 col-md-4">
              <div className="card h-100 bg-light shadow-sm mt-3">
                <img
                  src={room.image}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title ">Room {room.id}</h5>
                  <p className="card-text ">
                    <span className="fw-bold text-center"> {room.type}</span>
                    <br />
                    <span className="card-text">
                      Price:
                      <Badge className="bg-warning text-black ms-2">
                        ₹{room.price}
                      </Badge>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: "bold",
                        }}
                        className="ps-1"
                      >
                        per night
                      </span>
                      <br />
                      <span style={{ fontSize: 10 }}>including all taxes</span>
                    </span>
                    <br />
                    <span>{room.description}</span>
                  </p>
                  <Button
                    variant="outline-primary"
                    onClick={() => handleBookNow(room.type)}
                  >
                    Book Now
                  </Button>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
