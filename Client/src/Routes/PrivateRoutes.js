import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAuthToken } from '../Services/authToken';
//Routes with props
//Pass props using 'myProps'

export default function PrivateRoutes({ component: C, myProps, ...rest }) {
    return ( getAuthToken() ?
        <Route {...rest} render={(props) => <C {...props} {...myProps} />} /> :
        <Redirect to='/login' />
    );
}