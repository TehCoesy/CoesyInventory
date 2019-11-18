import React, { useState, useEffect } from 'react';
import './App.css';
import NotFound from './Components/Extra/NotFound';
import Home from './Components/Common/Home';
import RouteMaster from './Routes/RouteMaster';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppliedRoutes from './Routes/AppliedRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';
import { AuthContext } from './Context/authContext';
import authService from './Services/AuthenticationService';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.Authenticator = new authService;
  }

  //Debug: Print all Routes
  //Object.values(RouteMaster).map((values) => {
  //  console.log(values);
  //});

  //Switching Routes
  render() {
    this.Authenticator.loadToken();
    return (
      <AuthContext.Provider value={this.Authenticator.getAuth()}>
          <Router>
          <Switch>
            {
              Object.values(RouteMaster).map((values) => (values.requireAuth ?
                <PrivateRoutes exact={values.exact} path={values.path} component={values.component} myProps={this} /> :
                <AppliedRoutes exact={values.exact} path={values.path} component={values.component} myProps={this} />
              ))
            }
            <AppliedRoutes exact path='/' component={Home} myProps={this} />
            <Route component={NotFound}/>
          </Switch>
          </Router>
        </AuthContext.Provider>
    );
  }
}