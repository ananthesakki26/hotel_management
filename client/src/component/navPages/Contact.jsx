import { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { contactValidation } from "../../utiles/validation";

function Contact() {

  const [formContact, setFormContact] = useState({
     email:"",
     phone:"",
     feedback:""
  })

  const [contactError,setContactError] = useState({});

  const handleChange = (e) =>{
     const {name,value} = e.target;
     setFormContact({...formContact ,[name]: value});

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const errors = contactValidation(formContact);
      setContactError(errors);
      if(Object.keys(errors).length === 0){
        alert("Form submitted successfully!");
      }
  };
 
  
  return (
    <div className="d-flex justify-content-center align-items-center mt-5  ">
      <Card className="p-4 shadow" style={{ width: "600px" }}>
        <h3
          className="text-center mb-4"
          style={{ fontFamily: "Acme, sans-serif", fontWeight: 200 }}
        >
          Contact Us
        </h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="Email address">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formContact.email}
              onChange={handleChange}
            />
            {contactError.email && <small className="text-danger">{contactError.email}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="Phone number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your phone number"
              name="phone"
              value={formContact.phone}
              onChange={handleChange}
            />
            {contactError.phone && <small className="text-danger">{contactError.phone}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="Feedback / Complaints">
            <Form.Label>Feedback / Complaints</Form.Label>
            <Form.Control
              as="textarea"
              name="feedback"
              rows={3}
              value={formContact.feedback}
              onChange={handleChange}
            />
            {contactError.feedback && <small className="text-danger">{contactError.feedback}</small>}
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="outline-success" type="submit" className="px-5">
              Submit
            </Button>

          </div>
        </Form>
      </Card>
    </div>
  );
}

export default Contact;
