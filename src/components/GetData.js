import React, { useContext } from "react";
import {Name1Context} from '../context/GlobalContextProvider'

function GetData(){

// context data
const [stateVariable1, setStateVariable1] = useContext(Name1Context);

// set global
React.useEffect(()=>{
    setStateVariable1(stateVariable1["name"]={"one":"Harry Potter","two": "voldemort" });
},[]);


return null;
}

export default GetData;