import React, {PureComponent} from 'react';
import './App.css';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import RouteMaster from './Routes/RouteMaster';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppliedRoutes from './Routes/AppliedRoutes';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
    this.state = {
      isAuthenticated: false,
      currentUser: null,
      currentUserID: null
    };
  }

  userHasAuthenticated(value) {
    this.setState({
      isAuthenticated: value
    })
    console.log(this.state.isAuthenticated);
  }

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
              <AppliedRoutes exact={values.exact} path={values.path} component={values.component} myProps={this} />
            ))
          }
          <AppliedRoutes exact path='/' component={Home} myProps={this} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}