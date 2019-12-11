import React from 'react';
import { Link } from 'react-router-dom';

export default function UserHome() {
    return (
        <div>
            This is User's Home:
            <ul>
                <Link to="/newInventory">Create a new Inventory</Link>
            </ul>
        </div>
    )
}