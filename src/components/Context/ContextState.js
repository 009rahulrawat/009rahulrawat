import React from "react";
import Context from "./Context";

const ContextState = (props) => {
  const state = {
    name: "aman",
    email: "dsakdj",
  };
  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

export default ContextState;
