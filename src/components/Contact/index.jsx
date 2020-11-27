import React, {useState} from "react";
import db from '../../firebase/firebaseConfig';
import { Button, Form } from "react-bootstrap";
import "./index.css";

const Constact = () => {
  const [formData, setFormData] = useState({email:"", message:""});

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault();
    sendEmail();
    setFormData({
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    console.log(formData);
    if (formData.email && formData.message){
      return db.collection('emails').add({
        email: formData.email,
        message: formData.message,
        time: new Date(),
      }).then(() => {
        return alert("Your message has been submitted 👍");
      }
      )
    .catch((error) => {
      console.log(error.message);
      return alert("There are some problems with the server. Please, send a direct message to: fadime.ozdemir11@gmail.com");
    })
    } else {
      return alert("please, fill out both email and message fields to send e-mail!")
    }
  }

  return (
    <div
      id="contact"
      className="contact d-flex flex-column align-items-center p-5"
    >
      <h2 className="p-4">Let's connect!</h2>
      <Form
        onSubmit={handleSubmit}
        name="contact"
        method="POST" 
        data-netlify="true" 
      >
        <Form.Group controlId="exampleForm.ControlInput1" className="py-2">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Please, enter your e-mail"
            onChange={updateInput}
            name="email"
            value={formData.email}
            className="shadow-none"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="How can I help you?"
            name="message"
            onChange={updateInput}
            value={formData.message}
            className="shadow-none"
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
