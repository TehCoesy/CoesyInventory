import React, { useState } from 'react';

export default class AuthService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authToken: "",
            userID: ""
        }

        this.loadToken = this.loadToken.bind(this);
        this.setTokens = this.setTokens.bind(this);
        this.setUser = this.setUser.bind(this);
        this.getAuth = this.getAuth.bind(this);
    }

    loadToken() {
        console.log("Loading tokens.")
        const token_data = localStorage.getItem('authToken');
        if (token_data) {
            this.state.authToken = token_data;
        }
        const user_id_data = localStorage.getItem('userID');
        if (user_id_data) {
            this.state.userID = user_id_data;
        }
    }

    setTokens(data) {
        localStorage.setItem('authToken', JSON.stringify(data));
        this.setState({
          authToken: data
        })
      }
    
    setUser(data) {
        localStorage.setItem('userID', JSON.stringify(data));
        this.setState({
          userID: data
        })
    }

    getAuth() {
        return {
            authToken: this.state.authToken,
            userID: this.state.userID,
            setAuthToken: this.setTokens,
            setUserID: this.setUser
        }
    }
}