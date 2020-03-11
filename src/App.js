import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state ={
    dog: []
  }
  componentDidMount(){
    fetch('https://dogs-backend.herokuapp.com/dogs')
      .then(response => response.json())
      .then(console.log)

  }
  render(){
    return (
      <div className="App">
      <h1>Dog Card</h1>
      </div>
    );
  }
}

export default App;
