import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {

  state = {
    text: "",
    lengthText: 0,
    message: ""
  }

  lengthText = (event) => {
    this.setState({lengthText: event.target.value.length});
    this.displayMessage(event);
  }

  displayMessage = (event) => {
    console.log(event.target.value.length);
    if (event.target.value.length < 5) {
      this.setState({message: "Text too short"});
    } else {
      this.setState({message: "Text long enough"});
    }
  }

  render() {
    return (
      <div className="App">
        <input type="text" defaultValue={this.state.text} onChange={this.lengthText}></input>
        <p>{this.state.lengthText}</p>
        <ValidationComponent length={this.state.lengthText} message={this.state.message}/>
      </div>
    );
  }
}

export default App;
