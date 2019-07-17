import React, { Component } from "react";
import connectStore from "../utils/connectStore";

class CounterDisplay extends Component {
  render() {
    return <div>{this.props.count.tenCount}</div>;
  }
}

export default connectStore(["count"])(CounterDisplay);
