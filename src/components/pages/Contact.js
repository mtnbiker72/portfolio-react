
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Contact() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <Form onSubmit={handleSubmit}>

<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={1}>
      Email
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={1}>
      Password
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={1}>
      Password
    </Form.Label>
    <Col sm={4}>
      <Form.Control as="textarea" rows={3} />
    </Col>
  </Form.Group>


      {/* <Form.Group className="mb-3" controlId="formComments">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
};


// return (
//   <form onSubmit={handleSubmit}>
//     <div>
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" required />
//     </div>
//     <div>
//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" required />
//     </div>
//     <div>
//       <label htmlFor="message">Message:</label>
//       <textarea id="message" required />
//     </div>
//     <button type="submit">{status}</button>
//   </form>
// );