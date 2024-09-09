import { useRef } from 'react';
import './App.css';
import Input from './Input';

function App() {
  const firstname = useRef('');
  const lastname = useRef('');
  const submitEvent = ()=>{
      firstname.current.style.color="black";
      firstname.current.style.backgroundColor="yellow";
  }
  return (
    <div className="App">
      <Input type="text" placeholder='Firstname' ref={firstname} />
      <Input type="text" placeholder='Lastname' ref={lastname} />
      <button onClick={submitEvent}>Submit</button>
    </div>
  );
}

export default App;
