import React from "react";
import "./Login.css";

export default class Login extends React.Component {
  validateForm() {
    return true;
  }

  handleSubmit(event) {
  event.preventDefault();
    if (this.validateForm()) {
      this.props.history.push('/');
    } else {
      alert("Invalid email/password!");
    }
  }

  myFunction() {

  }

  render() {
    return (
      <div id="box">
        <div id="signup" >
          <form onSubmit={(e) => {this.handleSubmit(e)}}>
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
          <form>
            <h1>Login</h1>
            <input type="text" name="login-username" placeholder="Usename / Email" />
            <br />
            <input type="password" name="login-password" placeholder="Password" />
            <br/>
            <input type="submit" name="login-btn" value="Login" />
            <br/>
            <h2>Forgot password </h2>
            <input type="text" name="forgot-username" placeholder="Username / Email" />
            <br/>
            <input type="submit" name="forgotpass" value="Confirm" />
            <div className="popup" onClick={this.myFunction()}>Click me to toggle the popup! </div>
            <span className="popuptext" id="myPopup">A Simple Popup!</span>
          </form>
        </div>
      </div>
      );
  }  
}