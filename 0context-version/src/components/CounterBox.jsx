import React from "react";
import { connect } from "../utils/connect";

function CounterBox(props) {
  return (
    <div>
      <div>{props.count}</div>
      <button onClick={() => props.increment()}>+</button>
      <div>{props.tenCount}</div>
      <button onClick={() => props.increment_ten()}>+</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
    tenCount: state.tenCount
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () =>
      dispatch({
        type: "INCREMENT"
      }),
    increment_ten: () =>
      dispatch({
        type: "INCREMENT_TEN"
      })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterBox);
