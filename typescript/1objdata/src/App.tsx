import React from 'react';
import Child from './Child';

const obj = {
  name:'Seeema',
  desination:'Developer',
  age:25
}


function App() {
  return (
    <Child objData={obj}/>
  );
}

export default App;
