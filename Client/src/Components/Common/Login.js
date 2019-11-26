import React, { useState } from "react";
import "./Login.css";
import { useAuth } from '../../Context/authContext';

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
  const authToken = useAuth();
  
  //Login
  function handleLoginSubmit(event) {
    event.preventDefault();
    if (validateLoginForm()) {
      processLogin();
    } else {
      alert("Invalid form! Please check for errors");
    }
  }

  function validateLoginForm() {
    return loginPassword.length > 0 && loginUsername.length > 0;
  }

  async function processLogin() {
    const url = 'http://localhost:5000/auth/login';
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: loginUsername,
        password: loginPassword
      })
    }

    await fetch(url, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);

        if (response.success) {
          localStorage.setItem('authToken', response.myToken);
        }
        
        alert(response.message);
    })
  } 

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
            <p class="popup" onClick={handlePopup}>
            Agree with the terms of service
          <span
          
            class={`popuptext ${visible ? "show" : null}`}
            id="myPopup"
          >
            this is simple terms of service
          </span></p>
            <button id="signup-btn" onClick={handleRegisterSubmit}>Sign up!</button>
          </form>
        </div>
        <div id="or">OR</div>
        <div id="login">
          <form onSubmit={e => handleLoginSubmit(e)}>
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