import React, { Component } from "react";
import { connect } from "react-redux";

class CounterDisplay extends Component {
  componentDidMount() {
    console.log(this.props.count);
  }

  render() {
    return <div>{this.props.count}</div>;
  }
}

function mapStateToProps(state) {
  return {
    count: state.count.count
  };
}

export default connect(
  mapStateToProps,
  null
)(CounterDisplay);
