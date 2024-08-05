import './App.css';
import {useState} from 'react';

function App() {
  const [state, setState] = useState([]);
  const [addArr, setAddArr] = useState([]); 
  const submit = (e)=>{
     e.preventDefault()
     setAddArr(prev=>[...prev,state])
  }
  const handleInput = (e)=>{
    console.log(e.target.value)
    setState(e.target.value);
  }
  return (
    <div className="App">
      <form onSubmit={submit}>
        {console.log("state", state) }
        {console.log("arr", addArr) }
      <input type="text" onChange={handleInput} />
      <button type='submit'>Submit</button>
      </form>
      {addArr.map(data=>
      <li>{data}</li>
      )}
    </div>
  );
}

export default App;
