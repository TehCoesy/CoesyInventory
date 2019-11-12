import React from 'react';
import AppliedRoutes from './AppliedRoutes';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../Context/Auth';

//Use for Routes requiring Authentication
//Pass props using 'myProps'

export default function privateRoutes({ component: C, ...rest }) {
    const isAuthenticated = useAuth();
    return (
        <AppliedRoutes
            {...rest}
            render={props =>
                isAuthenticated ? (
                  <C {...props} />
                ) : (
                  <Redirect to="/" />
                )
              }
        />
    );
}