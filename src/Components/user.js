import React from 'react'

export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {localStorage.getItem('isAuthenticated') ? console.log("Logged in") : console.log("Logged out")}
            </div>
        );
    }
}