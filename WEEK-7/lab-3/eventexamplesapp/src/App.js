import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "",
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  sayHello = () => {
    this.setState({ message: "Hello! This is a static message." });
  };

  increaseAndSayHello = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (msg) => {
    this.setState({ message: msg });
  };

  handleClick = (e) => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Event Handling Example</h2>
        <p>Counter: {this.state.count}</p>

        <button onClick={this.increaseAndSayHello}>Increment</button>{" "}
        <button onClick={this.decrement}>Decrement</button>

        <p>{this.state.message}</p>

        <button onClick={() => this.sayWelcome("Welcome to the Event App!")}>
          Say Welcome
        </button>

        <br />
        <br />
        <button onClick={this.handleClick}>Synthetic Event (OnPress)</button>

        <br />
        <br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
