import React from 'react'
import { stateContext } from '../Context/Statecontext';
import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Log from './Log.css';
import { TextField } from '@mui/material';

const Login = () => {
  const [usrname, setUserName] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [showerror, setError] = useState("");
  const userData = require("../Fetchdata.json");

    const {state, dispatch} = useContext(stateContext);
    console.log("state", state, dispatch);



    const Navigate=useNavigate();
    const gotohome =()=>{
     Navigate("/home");
    }


    const handlesubmit=(event)=>{
        event.preventDefault();

    const useritem = userData.find((user)=>user.usrname === usrname);
    if(usrname === "" || userpassword === ""){
        setError("Pls Fill all fileds!!!");
    }
    else if(!useritem){
           setError("Input Not Matched!!!")
    }else if(useritem.userpassword !== userpassword){
            setError("Invalid Password!!!");
    }else{
            gotohome();
        }
    };

   const handleLogin=()=>{
      localStorage.setItem("Login", JSON.stringify(true));
      dispatch({type:"LOGIN", payload:true})
    }

 
  return (
    <div>
              <h2>Login Page</h2>
    <div className='logmain'>
    <form onSubmit={handlesubmit}>
    <TextField id="outlined-basic" label="Username" variant="outlined"  onChange={(event)=>{setUserName(event.target.value)}} /> <br /> <br />
    <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(event)=>{setUserPassword(event.target.value)}}
        />  <br /><br />
      <input type='submit' />
        {showerror && <p style={{color:"red"}}>{showerror}</p>}
    </form>
    <button onClick={()=>handleLogin()}>ClickToLogin</button>
    

    </div>
         {/* {state?.name}
        <button onClick={()=>dispatch({type: "UPDATE_NAME", payload:"context"})}>UpdateName</button> */}
    
    </div>
  )
}

export default Login