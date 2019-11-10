import React from "react";
import Authenticator from "../Servicers/Authenticator"
import "./Login.css";

export default function Login(props) {
  let loginUsername = "";
  let loginPassword = "";

  function validateForm() {
    return loginPassword.length > 0 && loginUsername.length > 0;
  }

  function handleSubmit(event) {
  event.preventDefault();
    if (validateForm()) {
      console.log("Validated!");
      if (Authenticator(loginUsername, loginPassword)) {
        props.userHasAuthenticated(true);
      } else {
        alert("Wrong email/password!");
      }
    } else {
      alert("Invalid email/password!");
    }
  }

  return (
      <div id="box">
        <div id="signup" >
          <form >
            <h1 id="tsignup">Sign up</h1>
            <input type="text"  placeholder="Username / Email" />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <input type="password" placeholder="Password" />
            <br/>
            <input type="password" placeholder="Confirm password" />
            <br/>
            <input type="checkbox" value="agree" /> 
            <p> Agree with the terms of service </p>
            <button type="submit" id="signupbtn">Sign up!</button>
          </form>
        </div>
        <div id="login">
          <form onSubmit={e => {handleSubmit(e)}}>
            <h1>Login</h1>
            <input type="text" name="login-username" placeholder="Usename / Email" onChange={e => {loginUsername=e.target.value}}/>
            <br />
            <input type="password" name="login-password" placeholder="Password" onChange={(e) => {loginPassword=e.target.value}}/>
            <br/>
            <input type="submit" name="login-btn" value="Login" />
          </form>
          <form>
          <br/>
            <h2>Forgot password </h2>
            <input type="text" name="forgot-username" placeholder="Username / Email" />
            <br/>
            <input type="submit" name="forgotpass" value="Confirm" />
            <div className="popup">Click me to toggle the popup! </div>
            <span className="popuptext" id="myPopup">A Simple Popup!</span>
          </form>
        </div>
      </div>
      );
}