import React from "react";
import { Carousel} from "react-bootstrap";
import standard from "../assets/standard.jpg";
import deluxe from "../assets/deluxe.jpg";
import premium from "../assets/premium.jpg";
import seaView from "../assets/seaView.jpg";
import gardenView from "../assets/gardenView.jpg";
import poolView from "../assets/poolView.jpg";
import mountainView from "../assets/mountainView.jpg";
import cityView from "../assets/cityView.jpg";
import lakeView from "../assets/lakeView.jpg";

const staff = [
  {
    name: "Ananth",
    role: "Receptionist",
    contact: "ananth@example.com",
    photo: standard,
  },
  {
    name: "Nirmal Kumar",
    role: "Room Attendant",
    contact: "nirmal@example.com",
    photo: deluxe,
  },
  {
    name: "Esakkipandi",
    role: "Bellboy",
    contact: "esakkipandi@example.com",
    photo: premium,
  },
  {
    name: "Chellapandi",
    role: "Concierge",
    contact: "chellapandi@example.com",
    photo: seaView,
  },
  {
    name: "Prasath",
    role: "Security",
    contact: "prasath@example.com",
    photo: gardenView,
  },
  {
    name: "Alian",
    role: "Maintenance",
    contact: "alian@example.com",
    photo: poolView,
  },
  {
    name: "Prajin",
    role: "Waiter/Server",
    contact: "prajin@example.com",
    photo: mountainView,
  },
  {
    name: "Vinoth",
    role: "Chef",
    contact: "vinoth@example.com",
    photo: cityView,
  },
  {
    name: "Ajith",
    role: "Manager",
    contact: "ajith@example.com",
    photo: lakeView,
  },
];

export default function StaffCarousel() {
  return (
    <>
      <div className="container py-4">
        <h2
          className="text-center fw-bold mt-2"
          style={{ fontFamily: "Acme, sans-serif", marginTop: "20px" }}
        >
          Meet Our Dedicated Staff
        </h2>

        <Carousel className="mt-4">
          {staff.map((person, index) => (
            <Carousel.Item key={index}>
              <img src={person.photo} alt={person.name} width="100%" height="400px" />
              <Carousel.Caption>
                <h3>{person.name}</h3>
                <p>
                  {person.role} - {person.contact}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}

