import React from 'react';
import './Dashboard.css';

export default function DashBoard() {
    return (
        <div id="name-user">
            <h3 id="nameuser">Name user :</h3>
            <input id="nameuser-type" type="name" name="name" required/>     
                <div id="avatar1">
               <span><img id="avatar-bg" src={require('../../../Resources/avatarbg.jpg')} alt="Avatar-BG"/></span>
                        <div id="avatar-full"><img id="avatar-bg1" src={require('../../../Resources/avatarbg.jpg')} alt="Avatar-Full"/></div>
                        
                        </div>
                         <p id="note-avatar">* Avatar picture must be a square image.</p>
                        <button id="change-btn">Change avatar</button>
                       
        </div>
    );
}