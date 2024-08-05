import './App.css';
import { addCount, minusCount, incrementByAmount } from './redux/counter';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const {value, list} = useSelector(state=>state.counter);
  const dispatch = useDispatch()
  return (
    <div className="App">
       <h1>Redux Toolkit</h1>

       {/* {value} */}
       <h2>Name:{value.name}</h2>
       <h2>Name:{value.age}</h2>
       <h2>Name:{value.contact}</h2>

      <button onClick={()=>dispatch(addCount())}>Add Age</button>
      <button onClick={()=>dispatch(minusCount())}>Minus Age</button>


       <ul>
        {list.map((data, id)=>{
          return (
            <li key={id}>{data}</li>
          )
        })}
       </ul>
    </div>
  );
}

export default App;
