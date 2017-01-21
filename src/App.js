import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardComponent from "./components/dashboard/dashboard"

class App extends Component {
  render() {
    return (
      <DashboardComponent/>
    );
  }
}

export default App;