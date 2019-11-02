import React,{PureComponent} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Game from "./Components/TicTacToe";


export default class App extends PureComponent {
  render() {
    return (
    <React.Fragment>
      <Router>
        <div>
          <OldSchoolMenuLink
            activeOnlyWhenExact={true}
            to="/"
            label="Home"
          />
          <OldSchoolMenuLink to="/about" label="About" />
          <OldSchoolMenuLink to="/tictactoe" label="TicTacToe" />
          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/tictactoe">
              <TicTacToe />
            </Route>
          </Switch>
        </div>
      </Router>
      <React.Fragment>
        <div>
          <header>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
        </div>
      </React.Fragment>
    </React.Fragment>
    );
  }
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "active" : ""}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function TicTacToe() {
  return <Game />;
}