import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { validateEmail } from "../utils/helpers";
function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      const isValid = validateEmail(inputValue);
      if (isValid) {
        setErrorMessage("");
        setEmail(inputValue);
      } else setErrorMessage("Email is invalid!");
    } else if (inputType === "name") {
      if (inputValue) {
        setErrorMessage("");
        setName(inputValue);
      } else setErrorMessage("Name is required!");
    } else {
      if (inputValue) {
        setErrorMessage("");
        setMessage(inputValue);
      } else setErrorMessage("Message is required!");
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          defaultValue={name}
          name="name"
          onBlur={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          defaultValue={email}
          name="email"
          onBlur={handleInputChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter message"
          defaultValue={message}
          name="message"
          onBlur={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </Form>
  );
}

export default Contact;
