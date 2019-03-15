import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    text: "",
    lengthText: 0
  }

  lengthText = (event) => {
    this.setState({lengthText: event.target.value.length});
  }

  render() {
    return (
      <div className="App">
        <input type="text" defaultValue={this.state.text} onChange={this.lengthText}></input>
        <p>{this.state.lengthText}</p>
      </div>
    );
  }
}

export default App;
