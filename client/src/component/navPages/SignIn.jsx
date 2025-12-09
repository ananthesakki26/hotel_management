import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signValidation } from "../../utiles/validation";

export default function SignIn() {
 

  const [signForm,setSignForm] = useState({
    email:"",
    password:""
  })

  const [signError,setSignError] = useState({});


  const handleChange = (e) =>{
  const {name,value} = e.target;
  setSignForm({...signForm ,[name]: value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const errors = signValidation(signForm);
    setSignError(errors);
    if(Object.keys(errors).length === 0){
      alert("Sign in successful!");
    }

  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 ">
      <Card className="p-4 shadow" style={{ width: "500px" }}>
        <h3
          className="text-center mb-4"
          style={{ fontFamily: "Acme, sans-serif", fontWeight: 200 }}
        >
          Sign In
        </h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={signForm.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
            />
            {signError.email && <small className="text-danger">{signError.email}</small>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={signForm.password}
              name="password"
              onChange={handleChange}
              placeholder="Enter password"
            />
            {signError.password && <small className="text-danger">{signError.password}</small>}
          </Form.Group>

          <div className="d-flex justify-content-center ">
            <Button variant="outline-dark" type="submit" className="px-5">
              Login
            </Button>
          </div>
        </Form>
        <div className="text-center mt-3">
          <small>
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary fw-bold">
              Create Account
            </Link>
          </small>
        </div>
      </Card>
    </div>
  );
}
