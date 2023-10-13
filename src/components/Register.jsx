import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from 'react-router-dom'
import TweetMachine from "./TweetMachine";

import "./Register.css"

const Register = () => {
    const [visible, setVisible] = useState(true)
    const [isToggled, setIsToggled] = useState(false);
 
    const removeElement = () => {
     setVisible((prev) => !prev)
     setIsToggled((prev) => !prev);
   };
    
    return (
        <div className="register">
      {visible && (
        <div className="form">
           <TextField id="outlined-basic" label="Username" variant="outlined" />
           <TextField id="outlined-basic" label="Password" variant="outlined" />
           <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
           <Button className="submit" onClick={removeElement} variant="contained">Submit</Button>
           <Button className="submit"  variant="contained">
           <Link to="/register">Register</Link>
           </Button>
         </div>
      )}
      { isToggled && <TweetMachine />} 
    </div>
    )
}

export default Register;