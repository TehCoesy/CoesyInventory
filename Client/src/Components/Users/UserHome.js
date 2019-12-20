import React from 'react';
import { Link } from 'react-router-dom';
import { confirmAuthToken } from '../../Services/authToken';

export default function UserHome() {
    return (
        <div>
            This is User's Home:
            <ul>
                <Link to="/newInventory">Create a new Inventory</Link>
            </ul>
            <button onClick={e => confirmAuthTokenE(e)}>Click to check authToken</button>
        </div>
    )
}

function confirmAuthTokenE(event) {
    event.preventDefault();
    confirmAuthToken();
}