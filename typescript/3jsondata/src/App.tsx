import React from 'react';
import './App.css';
import ChildComp from './ChildComp';
import DataList from "./data.json"

function App() {

  return (
    <ChildComp arrayData={DataList}/>
  );
}

export default App;
