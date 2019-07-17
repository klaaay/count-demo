import React, { useContext } from "react";
const MyContext = React.createContext();
export const MyProvider = MyContext.Provider;

export const connect = (mapStateToProps, mapDispatchToProps) => {
  return function(Component) {
    return function(_props) {
      const { state, dispatch } = useContext(MyContext);
      const stateToProps = mapStateToProps(state);
      const dispatchProps = mapDispatchToProps(dispatch);
      const props = { ..._props, ...stateToProps, ...dispatchProps };
      return <Component {...props} />;
    };
  };
};
