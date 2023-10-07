import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from 'react-router-dom'
import TweetMachine from "./TweetMachine";

const Register = () => {
    const [visible, setVisible] = useState(true)
    const [isToggled, setIsToggled] = useState(false);
 
    const removeElement = () => {
     setVisible((prev) => !prev)
     setIsToggled((prev) => !prev);
   };
    
    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {visible && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
           <TextField id="outlined-basic" label="Username" variant="outlined" />
           <TextField id="outlined-basic" label="Password" variant="outlined" />
           <Button style={{backgroundColor: '#F1DABF'}} onClick={removeElement} variant="contained">Submit</Button>
           <Button style={{backgroundColor: '#F1DABF'}}  variant="contained">
           <Link to="/register">Register</Link>
           </Button>
         </div>
      )}
      { isToggled && <TweetMachine />} 
    </div>
    )
}

export default Register;