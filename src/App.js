import React, { Component } from "react";
import "./App.css";

const inputStyle = {
  width: 235,
  margin: 5
};

class App extends Component {
  state = {
    randomIndex: ""
  };

  clicked = () => {
    const randomIndex = Math.floor(Math.random() * 20);
    this.setState({ randomIndex });
  };
  render() {
    const possibleAnswers = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "siz",
      "seven",
      "eight",
      "nine",
      "ten"
    ];
    const answers = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <button onClick={this.clicked}>click here to change name</button>
        {answers}
      </div>
    );
  }
}

export default App;
