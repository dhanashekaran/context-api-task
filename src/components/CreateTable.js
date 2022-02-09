import React, { useContext } from "react";
import {Name1Context} from '../context/GlobalContextProvider'

function CreateTable(){

// context data
const [stateVariable1, setStateVariable1] = useContext(Name1Context);

// read global data
return(
<>
  <h1>there is the global variable: {stateVariable1.one}</h1>
</>
);
}

export default CreateTable;