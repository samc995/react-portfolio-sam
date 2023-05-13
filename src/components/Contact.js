import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { validateEmail } from "../utils/helpers";

function ContactForm() {
 
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [valid, setValid] = useState(false)

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleValidation = (e) => {
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
        setValid(true)
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage("Required field");
      } else {
        setErrorMessage("");
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("Email sent!");

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <Form className="form" onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            onBlur={handleValidation}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>email</Form.Label>
          <Form.Control
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            onBlur={handleValidation}
          />
          <Form.Text>We'll never share your email.</Form.Text>
          <br />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="message"
            onBlur={handleValidation}
          />
        </Form.Group>
        <Button disabled={(!(email && name && message && valid && !errorMessage))}onClick={handleFormSubmit}>
          Submit
        </Button>
        {errorMessage && (
        <div className="error">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </Form>
     
    </div>
  );
}

export default ContactForm;