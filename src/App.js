import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    text: "",
    lengthText: 0,
    message: ""
  }

  lengthText = (event) => {
    this.setState({lengthText: event.target.value.length});
    this.setState({text: event.target.value});
    this.displayMessage(event);
  }

  displayMessage = (event) => {
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

        {this.state.text.split('').map((letter, index) => {
          return <CharComponent
            letter={letter}></CharComponent>
        })}
      </div>
    );
  }
}

export default App;
