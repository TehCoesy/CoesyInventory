import React, { useState } from 'react';
import DashBoard from './UserComponents/Dashboard';
import post from '../../Services/expressService';
import { getAuthToken } from '../../Services/authToken';

export default function CreateNewInventory() {
    const [organizationName, setOrgName] = useState("");
    const [organizationDesc, setOrgDesc] = useState("");
    const [existingInventory, setExisting] = useState(false);

    function validateForm() {
        return true;
    }

    function handleNewOrganization(event) {
        event.preventDefault();
        post('/regInventory/newInventory', { organizationName: organizationName, organizationDesc: organizationDesc, authToken: getAuthToken()})
        .then(function(result) {
            alert(result.message);
        }, function(error) {
            alert(error.message); 
        })
    }

    post('/inventory/check', { authToken: getAuthToken() })
    .then(function(result) {
        if (!result.success) {
            setExisting(true)
        }
    }, function(error) {

    })

    if (existingInventory) {
        return (
            <div>
                You already registered in an inventory!
            </div>
        ) 
    } else {
        return (
            <div id="user-body">
       
        <div id="user-box">
            <div id="name-user">
                <h3 id="nameuser">Name user</h3>
                <div id="avatar1">
               <span><img id="avatar-bg" src={require('../../Resources/avatarbg.jpg')} alt="Avatar-BG"/></span>
                <div id="avatar-full"><img id="avatar-bg1" src={require('../../Resources/avatarbg.jpg')} alt="Avatar-Full"/></div>
                </div>
                
            </div>
            <div id="info-user">
                <div id="info-box">
                    <form>
                        <h3>You inventory information :</h3>
                        Organization name :
                        <input type="text" name="" required value={organizationName} onChange={e => setOrgName(e.target.value)}/>
                        Organization description : 
                        <input type="text" name="" required value={organizationDesc} onChange={e => setOrgDesc(e.target.value)}/>
                       
                        <button id="Comfirm" onClick={e => handleNewOrganization(e)}>Comfirm</button>
                
                    </form>
                </div>
            </div>
        </div>
    </div>
        )
    }
    
}