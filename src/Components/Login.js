import React from "react";
import "./Login.css";

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
  }

  handleSubmit(event) {
  event.preventDefault();
    if (this.validateForm()) {
      this.props.history.push('/');
    } else {
      alert("Invalid email/password!");
    }
  }
  render() {
    return (
      
      <div class="loginmom">
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
          <form>
            <h1>Login</h1>
            <input type="text" name="login-username" placeholder="Usename / Email" />
            <br />
            <input type="password" name="login-password" placeholder="Password" />
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
}