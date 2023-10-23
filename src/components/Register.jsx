import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from 'react-router-dom'


import "./Register.css"

const Register = () => {

  const [inputs, setInputs] = useState({});
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  const options = {
      method: 'POST',
      body: inputs 
  };
  fetch( '/register', options )  


  }

  return (
    <div>
    <form onSubmit={handleSubmit} >
      <label>Enter your username:
      <input 
        type="text" 
        name="username" 
        value={inputs.username} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your password:
        <input 
          type="text" 
          name="password" 
          value={inputs.password} 
          onChange={handleChange}
        />
      </label>
      <Button style={{backgroundColor: '#F1DABF'}}  variant="contained" onClick={handleSubmit}>
           <Link to="/tweetmachine">Register</Link>
           </Button>
    </form>

    </div>
    )
}

export default Register;