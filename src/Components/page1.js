import React, { Component } from "react";
import "./page1.css"
import Modal from "react-awesome-modal";

export default class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleClick() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <body>
        <h2> Popup </h2>
        <div class="popup" onClick={this.handleClick.bind(this)}>
          Click me to toggle the popup!
          <span
          
            class={`popuptext ${this.state.visible ? "show" : null}`}
            id="myPopup"
          >
            A Simple Popup!
          </span>
        </div>
      </body>
    );
  }
}
