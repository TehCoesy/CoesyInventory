import React from 'react';
import post from '../../Services/expressService';
import { getUserID } from '../../Services/authToken';

export default function RequestAdmin() {
    return (
        <div>

        </div>
    )
}

function fetchOrganizationList() {
    var body = {
        userID: getUserID()
    }
    post('/registerInventory/fetchAll')
}