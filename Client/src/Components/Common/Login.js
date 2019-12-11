import React, { useState } from "react";
import "./Login.css";
import getAuthToken from '../../Services/authToken';
import { Redirect } from 'react-router-dom';
import { handleLoginSubmit } from './LoginOperation';

export default function Login(props) {
  //Login Form
  const [loginUsername, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //Register Form
  const [registerUsername, setRegisterUserName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const visible = false;

  //Register
  function handleRegisterSubmit(event) {
    event.preventDefault();
    if (validateRegisterForm()) {
      processRegister()
    } else {
      alert("Invalid Register Form!");
    }
  }

  function validateRegisterForm() {
    var registerValid = true;
    if (registerUsername.length <= 0) {
      registerValid = false;
    }
    if (registerPassword.length <= 0) {
      registerValid = false;
    }
    if (registerEmail <= 0) {
      registerValid = false;
    }
    if (confirmPassword <= 0 || confirmPassword !== registerPassword) {
      registerValid = false;
    }

    return registerValid;
  }

  async function processRegister() {
    const url = 'http://localhost:5000/register/new_acc';
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        regUsername: registerUsername,
        regPassword: registerPassword,
        regEmail: registerEmail
      })
    }

    await fetch(url, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        alert(response.message);
    })
  }

  //Popup
  function handlePopup() {

  }

  //Render
  //Redirect to User Home when logged in (authToken)
  if (getAuthToken()) {
    return (
      <Redirect to='/user' />
    )
  }

  return (
      <div className="loginmom">
        <div id="box">
        <div id="signup" >
          <form >
            <h1 id="l_signup">Sign up</h1>
            <input type="text"  placeholder="Username" value={registerUsername} onChange={e => setRegisterUserName(e.target.value)}/>
            <br />
            <input type="text" placeholder="Email" value={registerEmail} onChange={e => setRegisterEmail(e.target.value)}/>
            <br />
            <input type="password" placeholder="Password" value={registerPassword} onChange={e => setRegisterPassword(e.target.value)}/>
            <br/>
            <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            <br/>
            <input type="checkbox" value="agree" /> 
            <p className="popup" onClick={handlePopup}>
            Agree with the terms of service
          <span
          
            className={`popuptext ${visible ? "show" : null}`}
            id="myPopup"
          >
            this is simple terms of service
          </span></p>
            <button id="signup-btn" onClick={handleRegisterSubmit}>Sign up!</button>
          </form>
        </div>
        <div id="or">OR</div>
        <div id="login">
          <form onSubmit={e => handleLoginSubmit(e, loginUsername, loginPassword)}>
            <h1>Login</h1>
            <input type="text" value={loginUsername} name="login-username" placeholder="Usename / Email" onChange={e => setLoginUserName(e.target.value)}/>
            <br />
            <input type="password" value={loginPassword} name="login-password" placeholder="Password" onChange={e => setLoginPassword(e.target.value)}/>
            <br/>
            <button type="submit" id="login-btn">Login</button>
            <br/>
            <h2>Forgot password </h2>
            <input type="text" name="forgot-username" placeholder="Username / Email" />
            <br/>
            <button type="submit" id="forgotpass-btn">Confirm</button>
          </form>
        </div>
      </div>
      </div>
      );
}