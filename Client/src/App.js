import React from 'react';
import './App.css';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import RouteMaster from './Routes/RouteMaster';
import AppliedRoutes from './Routes/AppliedRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';

import NotFound from './Components/Extra/NotFound';
import Home from './Components/Common/Home';

export default function App() {
  //Switching Routes
  return (
    <Router>
      <Switch>
        {
          Object.values(RouteMaster).map((values) => (values.requireAuth ?
            <PrivateRoutes exact={values.exact} path={values.path} component={values.component} myProps={this} key={values.path}/> :
            <AppliedRoutes exact={values.exact} path={values.path} component={values.component} myProps={this} key={values.path}/>
          ))
        }
        <AppliedRoutes exact path='/' component={Home} myProps={this} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}