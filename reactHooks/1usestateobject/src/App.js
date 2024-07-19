import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName] =useState({firstName:'',lastName:''})
  const submit = ()=>{
    console.log("submit")
  }
  return (
    <div className="App">
      <form>
        <label>FirstName</label>
        <input type="text" onChange={(e)=>setName({...name,firstName:e.target.value})} /><br/>
        <label>LastName</label>
        <input type="text" onChange={(e)=>setName({...name,lastName:e.target.value})} /><br/>
        {JSON.stringify(name)}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
