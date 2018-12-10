import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Project from './Project'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Project />
      </div>
    );
  }
}

export default App;
