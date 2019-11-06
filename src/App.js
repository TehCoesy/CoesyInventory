import React, {PureComponent} from 'react';
import './App.css';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import RouteMaster from './Routes/RouteMaster';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default class App extends PureComponent {
  render() {

    //Debug: Print all Routes
    //Object.values(RouteMaster).map((values) => {
    //  console.log(values);
    //});

    //Switching Routes
    return (
      <Router>
        <Switch>
          {
            Object.values(RouteMaster).map((values) => (
              <Route exact={values.exact} path={values.path} component={values.component}/>
            ))
          }
          <Route exact path='/' component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}