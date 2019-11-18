import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../Context/authContext'
//Routes with props
//Pass props using 'myProps'

export default function PrivateRoutes({ component: C, myProps, ...rest }) {
    const authContext = useAuth();

    console.log(authContext);
    
    return ( authContext.authToken ?
        <Route {...rest} render={(props) => <C {...props} {...myProps} />} /> :
        <Redirect to='/login' />
    );
}