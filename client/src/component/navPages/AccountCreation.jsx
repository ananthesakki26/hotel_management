import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { accountCreationValidation } from "../../utiles/validation";

const AccountCreation = () => {

  const [accountForm,setAccountForm] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const [accountError,setAccountError] = useState({});

  const handleChange = (e) =>{
    const {name,value} =e.target;
    setAccountForm({...accountForm,[name]: value});

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const errors = accountCreationValidation(accountForm);
    setAccountError(errors);
    if(Object.keys(errors).length === 0){
      alert("Account created successfully!");
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center mt-5  ">
      <Card className="p-4 shadow" style={{ width: "400px" }} >
        <h3
          className="text-center mb-4"
          style={{ fontFamily: "Acme, sans-serif", fontWeight: 200 }}
        >
          Create Account
        </h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={accountForm.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          {accountError.name && <small className="text-danger">{accountError.name}</small>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={accountForm.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          {accountError.email && <small className="text-danger">{accountError.email}</small>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={accountForm.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          {accountError.password && <small className="text-danger">{accountError.password}</small>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={accountForm.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
            />
          {accountError.confirmPassword && <small className="text-danger">{accountError.confirmPassword}</small>}
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="outline-success" type="submit" className="px-5">
              Register
            </Button>
          </div>
        </Form>
        <div className="text-center mt-3">
          <small>
            Already have an account?{" "}
            <Link to="/signin" className="text-primary fw-bold">
              Sign In
            </Link>
          </small>
        </div>
      </Card>
    </div>
  );
};

export default AccountCreation;
