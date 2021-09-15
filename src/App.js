import React, { Component } from 'react';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Menu from './menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
}

export default App;
