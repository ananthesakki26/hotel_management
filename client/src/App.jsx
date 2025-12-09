import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./component/Navigation";
import Home from "./component/Home";
import RoomCards from "./component/RoomCards";
import StaffCarousel from "./component/Staffcarousel";
import Contact from "./component/navPages/Contact";
import Service from "./component/navPages/Service";
import ServiceCards from "./component/ServiceCards";
import Rooms from "./component/navPages/Rooms";
import Book from "./component/navPages/Book";
import BookingForm from "./component/navPages/BookingsForm";
import Staff from "./component/navPages/Staff";
import FAQ from "./component/navPages/Faq";
import AccountCreation from "./component/navPages/AccountCreation";
import SignIn from "./component/navPages/SignIn";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <RoomCards />
              <StaffCarousel />
              <ServiceCards />
            </>
          }
        />
        
        <Route path="/book" element={<Book />} />
        <Route path="/booking/:roomId" element={<BookingForm />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/register" element={<AccountCreation />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
