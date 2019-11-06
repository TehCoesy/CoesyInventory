import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const history = useHistory();

  var username = "";
  var email = "";
  var password = "";

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit() {
    if (validateForm()) {
      history.push("/");
    } else {
      alert("Invalid email/password!");
    }
  }

  function setPassword(value) {
    password = value;
  }

  function setEmail(value) {
    email = value;
  }

  function setUsername(value) {
    username = value;
  }

  return (
    //<div className="Login">
    //  <form onSubmit={handleSubmit}>
    //   <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)}/>
    //   <input type="text" placeholder="password" onChange={e => setPassword(e.target.value)}/>
    //   <button type="submit">Submit</button>
    // </form>
    //</div>
    <div id="box">
      <div id="signup" onSubmit={handleSubmit}>
        <form>
          <h1 id="tsignup">Sign up</h1>
          <input type="text" name="username" placeholder="Username / Email"/>
          <br/>
          <input type="text" name="email" placeholder="Email"/>
          <br/>
          <input type="password" name="password" placeholder="Password"/>
          <br/>
          <input type="password" name="repassword" placeholder="Comfirm password"/>
          <br/>
          <input type="checkbox" name="agree" value="agree" /> 
          <p> Agree with the terms of service </p>
          <input type="submit" name="signupbtn" value="Sign up"/>
        </form>
      </div>
      <div id="login">
          <h1>Login</h1>
          <input type="text" name="login-username" placeholder="Usename / Email"/>
          <br/>
          <input type="password" name="login-password" placeholder="Password"/>
          <br/>
          <input type="submit" name="login-btn" value="Login"/>
          <br/>
          <h2>Forgot password :</h2>
          <input type="text" name="forgot-username" placeholder="Username / Email"/>
          <br/>
          <input type="submit" name="forgotpass" value="Comfirm"/>
      </div>
      <div id="or">OR</div>
    </div>
  );
}