import React from 'react';
import ReactDOM from "react-dom";
import GetData from './components/GetData'
import CreateTable from './components/CreateTable'
import GlobalContextProvider from './context/GlobalContextProvider';


ReactDOM.render(
  <GlobalContextProvider>
    <>
    <GetData/>
      <CreateTable/>
      </>
  </GlobalContextProvider>
  ,
  document.getElementById("root")
);
