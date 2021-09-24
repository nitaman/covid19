import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Home from "./home";
import About from "./about";

const page404 = () => <div><h1>404</h1>存在しないページです</div>  //<= ヒットしなかった時用のページを追加

export default class Menu extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route exact component={page404} />
        </Switch>
      </Router>
    );
  }
}
