import React, {PureComponent} from 'react';
import './App.css';
import NotFound from './Components/NotFound';
import Login from './Components/Login';
import RouteMaster from './Routes/RouteMaster';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default class App extends PureComponent {
  render() {
    Object.values(RouteMaster).map((values) => {
      console.log(values);
    });
    return (
      <Router>
        <Switch>
          {
            Object.values(RouteMaster).map((values) => (
              <Route exact={values.exact} path={values.path} component={values.component}/>
            ))
          }
          <Route exact path='/login' component={Login}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}