import './App.css';
import {useState, useEffect} from 'react';
function App() {
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(20)
  useEffect(()=>{
    console.log("i am render")
  })
  useEffect(()=>{
    console.log("increment")
  },[inc])
  useEffect(()=>{
    console.log("decrement")
  },[dec])

  const handleIncrement = ()=>{
    setInc(inc+1)
  }

  const handleDecrement = ()=>{
    setDec(dec-1)
  }
  return (
    <div className="App">
        <h1>{inc}</h1>
        <button onClick={handleIncrement}>increment</button>
        <h1>{dec}</h1>
        <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}

export default App;
