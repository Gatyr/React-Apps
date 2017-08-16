import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DataEntry from './components/DataEntry'
import DataModification from './components/DataModification'
import DataDisplay from './components/DataDisplay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataEntry />
        <DataDisplay />
        <DataModification />
      </div>
    );
  }
}

export default App;
