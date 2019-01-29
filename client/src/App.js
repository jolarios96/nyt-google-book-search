import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Form from "./components/Form";

import Search from "./pages/Search";
import Saved from "./pages/Saved";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
          <Route exact path="/" component={Form} />
        </div >
      </Router>
    );
  }
}

export default App;
