import React from 'react';
import "./Home.css";

export default class Home extends React.Component {
    openLogin(e) {
        e.preventDefault();
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <h1 id="hland">INVENTORY MANAGEMENT</h1>
                 <p id="pland">easiest, fastest, most reliable</p>
                 <button id="btnland" onClick={(e) => {this.openLogin(e)}}>Start managing</button>
            </div>
        )
    }
}