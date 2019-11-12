import React from 'react';
import { Route } from 'react-router-dom'

//Routes with props
//Pass props using 'myProps'

export default function AppliedRoutes({ component: C, myProps, ...rest }) {
    return (
        <Route {...rest} render={(props) => <C {...props} {...myProps} />} />
    );
}