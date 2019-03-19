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

  onTextChanged = (event) => {
    this.setState({text: event.target.value, lengthText: event.target.value.length});
    this.displayMessage(event.target.value);
  }

  displayMessage = (text) => {
    if (text.length < 5) {
      this.setState({message: "Text too short"});
    } else {
      this.setState({message: "Text long enough"});
    }
  }

  deleteLetter = (letterIndex) => {
    const letters = this.state.text.split('');
    letters.splice(letterIndex,1);

    this.setState({text: letters.join(''), lengthText: letters.length});    
    this.displayMessage(this.state.text);
  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.text} onChange={this.onTextChanged}></input>
        <p>{this.state.lengthText}</p>
        <ValidationComponent message={this.state.message}/>

        {this.state.text.split('').map((letter, index) => {
          return <CharComponent
            click={() => this.deleteLetter(index)}
            letter={letter}
            key={index}></CharComponent>
        })}
      </div>
    );
  }
}

export default App;
