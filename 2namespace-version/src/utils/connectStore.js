import { connect } from "react-redux";

function mapStateToProps(props) {
  return function(store) {
    const res = {};
    props.forEach(item => {
      res[item] = store[item];
    });
    return res;
  };
}

export default function connectStore(props) {
  if (!props) {
    return connect();
  }
  return connect(mapStateToProps(props));
}
