import React, { Component } from 'react';
import './App.css';
import {Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to My Landing Pageee</h1>
        <p>Learn more about our company and products.</p>
        <Button variant="primary">Click Me!</Button>
      </div>
    );
  }
}

export default App;
