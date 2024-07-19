import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]= useState(0);

  const handleIncrement=()=>{
    setCounter(counter+1)
  }

  const handleDecrement=()=>{
    setCounter(counter-1)
  }

  return (
    <div className="App">
       <button onClick={()=>setCounter(counter+1)}>Increment</button>
       <button onClick={()=>setCounter(counter-1)}>Increment</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>{counter}</div>   
    </div>
  );
}

export default App;
