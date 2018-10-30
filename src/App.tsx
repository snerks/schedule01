import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  timeUnits = [
    { hour: 0, colour: "green" },
    { hour: 1, colour: "green" },
    { hour: 2, colour: "green" },
    { hour: 3, colour: "green" },
    { hour: 4, colour: "green" },
    { hour: 5, colour: "red" },
    { hour: 6, colour: "red" },
    { hour: 7, colour: "orange" },
    { hour: 8, colour: "green" },
    { hour: 9, colour: "green" },
    { hour: 10, colour: "green" },
    { hour: 11, colour: "green" },

    { hour: 12, colour: "green" },
    { hour: 13, colour: "green" },
    { hour: 14, colour: "green" },
    { hour: 15, colour: "green" },
    { hour: 16, colour: "green" },
    { hour: 17, colour: "red" },
    { hour: 18, colour: "red" },
    { hour: 19, colour: "orange" },
    { hour: 20, colour: "green" },
    { hour: 21, colour: "green" },
    { hour: 22, colour: "green" },
    { hour: 23, colour: "green" }
  ];

  zeroFill(value: number, width: number) {
    width -= value.toString().length;

    if (width > 0) {
      return (
        new Array(width + (/\./.test(value.toString()) ? 2 : 1)).join("0") +
        value
      );
    }
    return value + ""; // always return a string
  }

  render() {
    const currentDateTime = new Date();
    const currentHour = currentDateTime.getHours();

    const timeUnitItems = this.timeUnits.map((timeUnit, index) => (
      <div
        key={index}
        style={{
          paddingLeft: 0,
          fontWeight: "bold",
          backgroundColor: timeUnit.colour,
          color: "white",
          border: currentHour === timeUnit.hour ? "3px solid black" : ""
        }}
      >
        {this.zeroFill(timeUnit.hour, 2)}
        :00
      </div>
    ));

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div
          style={{
            margin: 0,
            listStyleType: "none",
            listStylePosition: "inside"
          }}
        >
          {timeUnitItems}
        </div>
      </div>
    );
  }
}

export default App;
