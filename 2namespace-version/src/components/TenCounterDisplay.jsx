import React, { Component } from "react";
import connectStore from "../utils/connectStore";

class CounterDisplay extends Component {
  render() {
    return <div>{this.props.tencount}</div>;
  }
}

export default connectStore(["tencount"])(CounterDisplay);
