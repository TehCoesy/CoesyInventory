import React, {PureComponent} from 'react';
import './App.css';
import NotFound from './Components/Extra/NotFound';
import Home from './Components/Common/Home';
import RouteMaster from './Routes/RouteMaster';
import PrivateRouteMaster from './Routes/PrivateRouteMaster';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppliedRoutes from './Routes/AppliedRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';
import { AuthContext } from './Context/Auth';


export default class App extends PureComponent {
  render() {

    //Debug: Print all Routes
    //Object.values(RouteMaster).map((values) => {
    //  console.log(values);
    //});

    //Switching Routes
    return (
      <AuthContext.Provider value={false}>
        <Router>
        <Switch>
          {
            Object.values(RouteMaster).map((values) => (
              <AppliedRoutes exact={values.exact} path={values.path} component={values.component} myProps={this} />
            ))
          }
          {
            Object.values(PrivateRouteMaster).map((values) => (
              <PrivateRoutes exact={values.exact} path={values.path} component={values.component} myProps={this} />
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