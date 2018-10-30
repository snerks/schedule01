import * as React from "react";
// import logo from "./logo.svg";
import "./App.css";

interface AppState {
  intervalId: NodeJS.Timeout | null;
  currentDateTime: Date;
}

class App extends React.Component<{}, AppState> {
  timeUnits = [
    { hour: 0, color: "white", backgroundColor: "green" },
    { hour: 1, color: "white", backgroundColor: "green" },
    { hour: 2, color: "white", backgroundColor: "green" },
    { hour: 3, color: "white", backgroundColor: "green" },
    { hour: 4, color: "white", backgroundColor: "green" },
    { hour: 5, color: "white", backgroundColor: "red" },
    { hour: 6, color: "white", backgroundColor: "red" },
    { hour: 7, color: "black", backgroundColor: "orange" },
    { hour: 8, color: "white", backgroundColor: "green" },
    { hour: 9, color: "white", backgroundColor: "green" },
    { hour: 10, color: "white", backgroundColor: "green" },
    { hour: 11, color: "white", backgroundColor: "green" },

    { hour: 12, color: "white", backgroundColor: "green" },
    { hour: 13, color: "white", backgroundColor: "green" },
    { hour: 14, color: "white", backgroundColor: "green" },
    { hour: 15, color: "white", backgroundColor: "green" },
    { hour: 16, color: "white", backgroundColor: "green" },
    { hour: 17, color: "white", backgroundColor: "red" },
    { hour: 18, color: "white", backgroundColor: "red" },
    { hour: 19, color: "black", backgroundColor: "orange" },
    { hour: 20, color: "white", backgroundColor: "green" },
    { hour: 21, color: "white", backgroundColor: "green" },
    { hour: 22, color: "white", backgroundColor: "green" },
    { hour: 23, color: "white", backgroundColor: "green" }
  ];

  constructor(
    props: {},
    state: AppState = {
      intervalId: null,
      currentDateTime: new Date()
    }
  ) {
    super(props, state);

    this.state = {
      ...state
    };
  }

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

  componentDidMount() {
    const intervalId = setInterval(() => this.timer(), 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
  }

  timer() {
    // setState method is used to update the state
    const currentDateTime = new Date();

    if (this.setState) {
      this.setState({ currentDateTime: currentDateTime });
    }
  }

  render() {
    // if (!this.state) {
    //   return null;
    // }

    // const { currentDateTime } = this.state;

    // if (!currentDateTime) {
    //   return null;
    // }

    const currentDateTime = new Date();
    const currentHour = currentDateTime.getHours();

    const timeUnitItems = this.timeUnits.map((timeUnit, index) => (
      <div
        key={index}
        style={{
          fontWeight: "bold",
          fontSize: currentHour === timeUnit.hour ? 22 : 14,
          backgroundColor: timeUnit.backgroundColor,
          color: timeUnit.color,
          border: currentHour === timeUnit.hour ? "3px solid white" : ""
        }}
      >
        {currentHour === timeUnit.hour
          ? currentDateTime.toLocaleTimeString()
          : this.zeroFill(timeUnit.hour, 2) + ":00"}
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
            margin: 0
          }}
        >
          {timeUnitItems}
        </div>
      </div>
    );
  }
}

export default App;
