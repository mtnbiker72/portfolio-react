import React, { useState, useReducer } from "react";

// Updates state based on form activity
// Blur happens when focus moves out of form field
function reducer(state, action) {
  switch (action.type) {
    case 'nameChange':
      const newNameChange = {...state, name: action.payload}
      return { ...newNameChange, submitDisabled: !isFormDataValid(newNameChange)}
    case 'emailChange':
      const newEmailChange = { ...state, email: action.payload };
      return { ...newEmailChange, submitDisabled: !isFormDataValid(newEmailChange)}
    case 'messageChange':
      const newMessageChange = { ...state, message: action.payload };
      return { ...newMessageChange, submitDisabled: !isFormDataValid(newMessageChange)} 
    case 'nameBlur': 
      const newState = {...state, isNameVisited: true, isNameValid: state.name}
      return {...newState, validationMessage: getValidationMessage(newState) }
    case 'emailBlur': 
      const newEmailState = {...state, isEmailVisited: true, isEmailValid: isEmailValid(state.email)}
      return {...newEmailState, validationMessage: getValidationMessage(newEmailState) }
    case 'messageBlur': 
      const newMessageState = {...state, isMessageVisited: true, isMessageValid: state.message}
      return {...newMessageState, validationMessage: getValidationMessage(newMessageState) }
    default:
      throw new Error();
  }
}

// Verify the email field is in th correct format
function isEmailValid(email) {
  return !!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
}

// Before submitting the form, make sure all fields are complete and valid
function isFormDataValid(state) {
  return (state.name && isEmailValid(state.email) && state.message)
}

// If the user has filled out the form fields incorrectly, show these errors
function getValidationMessage(state) {
  let validationMessage = [] ;
  if (state.isNameVisited && !state.name) {
    validationMessage.push ("Please enter a valid name");  
  }
  if (state.isEmailVisited && !isEmailValid(state.email)) {
    validationMessage.push ("Please enter a valid email");  
  }
  if (state.isMessageVisited && !state.message) {
    validationMessage.push ("Please enter a valid message");  
  }
  return validationMessage
}
// Keep track of whether each form field has been visited and if entry is valid
// Once the field has been visited, the user should have enter a valid entry
export default function Contact() {
  const initialArg = {
    name: "",
    email: "",
    message: "",
    submitDisabled: true,
    isNameVisited: false,
    isEmailVisited: false,
    isMessageVisited: false,
    isNameValid: true,
    isEmailValid: true,
    isMessageValid: true,
    validationMessage: []
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

  // Returning the html. If the user has filled out a field incorrectly, it will add
  // a red border to that field.  Once the user has clicked on a field and moves on, a 
  // validation check is performed.
  return (
    <div>
      <p>
        More more information, please reach out!
      </p>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label for="inputName">Name</label>
          <input type="text" className="form-control" 
            style={{ border: state.isNameValid ? '' : '1px solid red' }}
            value={state.name} id="inputName" onChange={(e) => dispatch({ type: 'nameChange', payload: e.target.value })} 
            onBlur={() => dispatch({ type: 'nameBlur'})}
            placeholder="Enter Name"></input>
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" 
            style={{ border: state.isEmailValid ? '' : '1px solid red' }} 
            value={state.email} id="inputEmail" onChange={(e) => dispatch({ type: 'emailChange', payload: e.target.value })} 
            onBlur={() => dispatch({ type: 'emailBlur'})}
            placeholder="Enter email"></input>
        </div>

        <div className="form-group">
          <label for="inputMessage">Message</label>
          <input type="text" className="form-control" style={{ border: state.isMessageValid ? '' : '1px solid red' }} 
            value={state.message} id="inputMessage" onChange={(e) => dispatch({ type: 'messageChange', payload: e.target.value })}  
            onBlur={() => dispatch({ type: 'messageBlur'})}
            input-lg placeholder="Message"></input>
        </div>
        <div>
          {state.validationMessage.map((msg) => (<p>{msg}</p>))}
        </div>

        <button type="submit" className="btn btn-primary" disabled={state.submitDisabled}>Submit</button>

      </form>
    </div>
  )
};
