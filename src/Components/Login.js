import React, { useState } from "react";
import Authenticator from "../Servicers/Authenticator"
import "./Login.css";

<<<<<<< HEAD
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleClick() {
    this.setState({ visible: !this.state.visible });
  }
  validateForm() {
    return true;
=======
export default function Login(props) {
  const [loginUsername, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  function validateForm() {
    return loginPassword.length > 0 && loginUsername.length > 0;
>>>>>>> 4573269d6193387ed36f13a51eece14894e102e7
  }

  function handleSubmit(event) {
  event.preventDefault();
  console.log(loginUsername + " " + loginPassword)
    if (validateForm()) {
      if (Authenticator(loginUsername, loginPassword)) {
        console.log("Validated!");
        props.userHasAuthenticated(true);
        console.log(localStorage.getItem('isAuthenticated'));
        props.history.push("/user");
      } else {
        alert("Wrong email/password!");
      }
    } else {
      alert("Invalid email/password!");
    }
  }
<<<<<<< HEAD
  render() {
    return (
      
      <div class="loginmom">
=======

  return (
>>>>>>> 4573269d6193387ed36f13a51eece14894e102e7
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
            <p class="popup" onClick={this.handleClick.bind(this)}>
            Agree with the terms of service
          <span
          
            class={`popuptext ${this.state.visible ? "show" : null}`}
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
            <button type="submit">Login</button>
          </form>
          <form>
          <br/>
            <h2>Forgot password </h2>
            <input type="text" name="forgot-username" placeholder="Username / Email" />
            <br/>
<<<<<<< HEAD
            <button type="submit" id="forgotpass-btn">Confirm</button>
            
=======
            <button type="submit" id="forgotpass-btn">Comfirm</button>
>>>>>>> 4573269d6193387ed36f13a51eece14894e102e7
          </form>
        </div>
      </div>
      </div>
      );
}