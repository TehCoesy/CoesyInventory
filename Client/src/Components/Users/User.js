import React from 'react'
import  './User.css'

export default function User() {
        return (
            <div id="user-body">
                {localStorage.getItem('authToken') ? console.log("Logged in") : console.log("Logged out")}
                <div id="user-box">
                    <div id="name-user">
                        <h3 id="nameuser">Name user :</h3>
                        <input id="nameuser-type" type="name" name="name" required/>
                        
                        <div id="avatar1">
                       <span><img id="avatar-bg" src={require('../../Resources/avatarbg.jpg')} alt="Avatar-BG"/></span>
                        <div id="avatar-full"><img id="avatar-bg1" src={require('../../Resources/avatarbg.jpg')} alt="Avatar-Full"/></div>
                        
                        </div>
                         <p id="note-avatar">* Avatar picture must be a square image.</p>
                        <button id="change-btn">Change avatar</button>
                       
                    </div>
                    <div id="info-user">
                        <div id="info-box">
                            <form>
                                <h3>Your information :</h3>
                                First name :
                                <input type="text" name="firstname" required/>
                                Last name : 
                                <input type="text" name="lastname" required/>
                                Contact email :
                                <input type="email" name="email" required/>
                                Phone :
                                <input type="tel" name="phone" required/>
                                <h3>Change password :</h3>
                                Old password :
                                <input type="password" name="password" required/>
                                New password :
                                <input type="password" name="password" required/>
                                Comfirm new password :
                                <input type="password" name="password" required/>
                                <button id="undo-btn">Undo and exit</button>
                        <button id="save-btn">Save and exit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
}