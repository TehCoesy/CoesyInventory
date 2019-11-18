import React, { useState } from "react";
import "./Login.css";
import { useAuth } from '../../Context/authContext';

export default function Login(props) {
  const [loginUsername, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const visible = false;
  const authToken = useAuth();
  

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm) {
      processLogin();
      authToken.setAuthToken("haha");
    } else {
      alert("Invalid form! Please check for errors");
    }
  }

  function validateForm() {
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
        email: "admin",
        password: "root"
      })
    }

    await fetch('http://localhost:5000/express_backend')
      .then(response => response.json())
      .then(response => {
        console.log(response.express);
      })

    await fetch(url, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        alert(response.message);
     })
  } 

  function handlePopup() {

  }

  return (
      <div className="loginmom">
        <div id="box">
        <div id="signup" >
          <form >
            <h1 id="l_signup">Sign up</h1>
            <input type="text"  placeholder="Username / Email" />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <input type="password" placeholder="Password" />
            <br/>
            <input type="password" placeholder="Confirm password" />
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
            <button type="submit" id="signup-btn">Sign up!</button>
          </form>
        </div>
        <div id="or">OR</div>
        <div id="login">
          <form onSubmit={e => handleSubmit(e)}>
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