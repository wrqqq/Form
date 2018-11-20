import React, { Component } from 'react';
import './App.css';
import TextFields from './components/TextField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <TextFields/>
      </div>
    );
  }
}

export default App;
