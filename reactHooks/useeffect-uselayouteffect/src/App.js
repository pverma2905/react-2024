import { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);
  //1) on every render
  useEffect(()=>{
    console.log("on every changes")
  })

  useLayoutEffect(()=>{
    console.log("use layout effect")
  })
  
  //2) initial render execute 
  useEffect(()=>{
     console.log("on one time")
  },[])

  //3) dependent based execution 
  useEffect(()=>{
    console.log("useEffect dependency")
  },[counter])

 

  //4) component remove 
  useEffect(()=>{
    return()=>{
      // code here
    }
  },[])

  const clickEvent = ()=>{
    setCounter((prev)=>prev+1)
  }
  return (
    <div className="App">
      <h1>useEffect Vs useLayoutEffect</h1>
      <button onClick={clickEvent}>Click {counter}</button>
    </div>
  );
}

export default App;
