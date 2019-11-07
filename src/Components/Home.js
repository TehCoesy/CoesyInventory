import React from 'react';
import "./Login.css";
export default class Home extends React.Component {
    render() {
        return (
            <div>
                   <h1 id="hland">INVENTORY MANAGEMENT</h1>
                 <p id="pland">easiest, fastest, most reliable</p>
                 <button id="btnland" onclick="openWin()">Start managing</button>
            </div>
        )
    }
    
    
    
     openWin() {
     window.open("http://localhost:3000/login", "_self", "width=500, height=500");
    }
    
    
}