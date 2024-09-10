import './App.css';
import {data} from "./data";


function App() {
  const downloadEvent = ()=>{
    const jsondata = `data:text/json;charset=utf-8,${encodeURIComponent(
   JSON.stringify(data)
  )}`

  const link = document.createElement('a');
  link.href = jsondata;
  link.download = 'data.txt';
  link.click();
  }


  return (
    <div className="App">
      <button onClick={downloadEvent}>Download</button>
    </div>
  );
}

export default App;
