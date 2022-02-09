import React, { useState } from "react";

export const Name1Context = React.createContext();

function GlobalContextProvider(props){

const [stateVariable1, setStateVariable1] = useState([]);

  return(
    <Name1Context.Provider value={[stateVariable1, setStateVariable1]}>
      {props.children}
    </Name1Context.Provider>
  );
}


export default GlobalContextProvider;