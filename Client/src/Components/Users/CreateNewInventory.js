import React, { useState } from 'react';
import DashBoard from './UserComponents/Dashboard';
import post from '../../Services/expressService';
import { getAuthToken } from '../../Services/authToken';

export default function CreateNewInventory() {
    const [organizationName, setOrgName] = useState("");
    const [organizationDesc, setOrdDesc] = useState("");

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

    return (
        <div>
            Create new Inventory here
            <form>
                <input type="text" placeholder="Organization Name" value={organizationName} onChange={e => setOrgName(e.target.value)}/>
                <button onClick={e => handleNewOrganization(e)}>Submit</button>
            </form>
        </div>
    )
}