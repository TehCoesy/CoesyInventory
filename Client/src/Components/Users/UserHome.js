import React from 'react';
import { Link } from 'react-router-dom';
import { confirmAuthToken } from '../../Services/authToken';
import './UserHome.css'

export default function UserHome() {
    return (
        <div id="UseHome">
           
            <div id='cssmenu'>
    <ul>
   <li><a href='#'>Contact</a></li>
   <li><a href="http://localhost:3000/Export" target='iframe-page'>Export items</a></li>
   <li><a href="http://localhost:3000/Import" target='iframe-page'>Import items</a></li>
    <li ><a href="http://localhost:3000/inventory" target='iframe-page'>Products</a></li>
    <li ><a href="http://localhost:3000/newInventory" target='iframe-page'>New Inventory</a></li>
    </ul>
    </div>
    <iframe id="iframe" name="iframe-page"> ggg</iframe>
        </div>
    )
}