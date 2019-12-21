import React from 'react';
import "./Home.css";
export default class Home extends React.Component {
    openLogin(e) {
        e.preventDefault();
        this.props.history.push('/login');
    }

    render() {
        return (
            <div class="homeBody">
                <div class="mainBody">
                <h1 id="hland">COESY INVENTORY </h1>
                <br/>
                 <p id="pland">easiest, fastest, most reliable</p>
                 <button id="btnland" onClick={(e) => {this.openLogin(e)}}>Get Started</button>
                </div>
            </div>
        )
    }
}