import React from "react";
import { Button, Form } from "react-bootstrap";
import "./index.css";

const Constact = () => {

  return (
    <div
      id="contact"
      className="contact d-flex flex-column align-items-center p-5"
    >
      <h2 className="p-4">Let's connect!</h2>
      <Form
        name="contact"
        method="POST" 
        data-netlify="true" 
        data-netlify-recaptcha="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact" />
        <Form.Group controlId="exampleForm.ControlInput1" className="py-2">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Please, enter your e-mail"
            name="email"
            className="shadow-none"
            required
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="How can I help you?"
            name="message"
            className="shadow-none"
            required
          />
        </Form.Group>
        <div>
          <div data-netlify-recaptcha="true"></div>
        </div>
        <Button variant="danger" type="submit" className="mt-2 mb-5">
          Send E-Mail
        </Button>
      </Form>
    </div>
  );
};

export default Constact;
