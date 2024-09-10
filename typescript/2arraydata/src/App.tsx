import React from 'react';
import './App.css';
import ChildComp from './ChildComp';

function App() {
  const organization = [
    {
      AccountId:"1",
      AccountName:"abc",
      employeeInfo:[
        {
          empName:"Seema",
          empAge:20,
          salary:10000,
          department:"IT"
        },
        {
          empName:"Seema1",
          empAge:21,
          salary:20000,
          department:"Management"
        }
      ]
    }
  ]
  return (
    <ChildComp arrayData={organization}/>
  );
}

export default App;
