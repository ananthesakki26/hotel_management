import React from "react";
import roomServiceImg from "../assets/roomService.jpg";
import houseKeepingImg from "../assets/houseKeeping.jpg";
import laundryServiceImg from "../assets/laundryService.jpg";
import spaWellnessImg from "../assets/spaWellness.jpg";
import swimmingPoolImg from "../assets/swimmingPool.jpg";
import airportShuttleImg from "../assets/airportShuttle.jpg";
import restaurantDiningImg from "../assets/restaurantDining.jpg";
import conferenceHallImg from "../assets/conferenceHall.jpg";
import gymFitnessImg from "../assets/gym.jpg";

const hotelServices = [
  {
    id: 1,
    name: "Room Service",
    details: "24/7 in-room dining with a variety of international dishes.",
    price: "Included",
    image: roomServiceImg,
  },
  {
    id: 2,
    name: "Housekeeping",
    details: "Daily cleaning, linen replacement and room sanitization.",
    price: "Included",
    image: houseKeepingImg,
  },
  {
    id: 3,
    name: "Laundry Service",
    details: "Fast and professional laundry & dry-cleaning service.",
    price: "500 - 1000",
    image: laundryServiceImg,
  },
  {
    id: 4,
    name: "Spa & Wellness",
    details: "Full body massage, sauna, steam bath and beauty treatments.",
    price: "4000 - 12000",
    image: spaWellnessImg,
  },
  {
    id: 5,
    name: "Swimming Pool",
    details: "Access to indoor/outdoor swimming pools.",
    price: "Included",
    image: swimmingPoolImg,
  },
  {
    id: 6,
    name: "Airport Shuttle",
    details: "Private airport pickup & drop-off service.",
    price: "2500 -5000",
    image: airportShuttleImg,
  },
  {
    id: 7,
    name: "Restaurant & Dining",
    details: "Buffet breakfast and multi-cuisine dining experience.",
    price: "1000 - 4000",
    image: restaurantDiningImg,
  },
  {
    id: 8,
    name: "Conference Hall",
    details: "Spacious hall equipped with modern audio-visual technology.",
    price: "1000/hr",
    image: conferenceHallImg,
  },
  {
    id: 9,
    name: "Gym & Fitness Center",
    details:
      "Fully equipped fitness center with experienced personal trainers.",
    price: "Included",
    image: gymFitnessImg,
  },
];

export default function HotelServices() {
  return (
    <div className="container ">
      <h2
        className="text-center mb-4 fw-bold"
        style={{ fontFamily: "Acme, sans-serif" }}
      >
        Hotel Services
      </h2>

      <div className="row g-4">
        {hotelServices.map((service) => (
          <div key={service.id} className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={service.image}
                className="card-img-top"
                alt={service.name}
                style={{ height: "180px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text text-muted">{service.details}</p>

                <div className="mt-auto">
                  <span className="fw-bold text-primary">{service.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
