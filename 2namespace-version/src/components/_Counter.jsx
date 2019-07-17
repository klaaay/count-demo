import React, { Component } from "react";
import connectStore from "../utils/connectStore";

class Counter extends Component {
  render() {
    return (
      <button
        onClick={() => {
          console.log(this.props.dispatch);
          this.props.dispatch({
            type: "count/tenIncrement",
            payload: {}
          });
        }}
      >
        +
      </button>
    );
  }
}

export default connectStore()(Counter);
