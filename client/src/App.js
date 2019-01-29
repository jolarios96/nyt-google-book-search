import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import SearchResultContainer from "./components/SearchResultContainer";

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
          <Route exact path="/" component={SearchResultContainer} />
        </div >
      </Router>
    );
  }
}

export default App;
