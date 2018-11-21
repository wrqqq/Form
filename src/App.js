import React, { Component } from 'react';
import './App.css';
import Form from './components/TextField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Форма обратной связи:</h1>
        <Form/>
      </div>
    );
  }
}

export default App;
