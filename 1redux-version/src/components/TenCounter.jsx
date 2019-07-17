import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Counter extends Component {
  render() {
    return <button onClick={this.props.ten_increment}>+</button>;
  }
}

export default connect(
  null,
  actions
)(Counter);
