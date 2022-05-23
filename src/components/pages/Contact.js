import React, { useState, useReducer } from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";

// Updates state based on form activity
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function Contact() {
  const initialArg = {
    name: "",
    email: "",
    message: "",
    submitDisabled: true,
    isNameVisited: false,
    isEmailVisited: false,
    isMessageVisited: false,
    isNameValid: false,
    isEmailValid: false,
    isMessageValid: false,
  }

  const [state, dispatch] = useReducer(reducer, initialArg);
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
    <div>
      <p>
        More more information, please reach out!
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>

        <div className="form-group">
          <label for="inputName">Name</label>
          <input type="text" className="form-control" id="inputName" placeholder="Enter Name"></input>
        </div>

        <div className="form-group">
          <label for="inputMessage">Message</label>
          <input type="text" className="form-control" id="inputMessage" placeholder="Message"></input>
        </div>

        <button type="submit" className="btn btn-primary" enabled={!state.submitDisabled}>Submit</button> 
      </form>
    </div>
  )
};

{/* <Form onSubmit={handleSubmit}>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={1}>
            Email
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="email" placeholder="Email" onBlur={() => alert('Please input a valid email address')} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={1}>
            Name
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Your Name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={1}>
            Message
          </Form.Label>
          <Col sm={4}>
            <Form.Control as="textarea" rows={3} />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}



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