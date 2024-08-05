
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("https://dummy.restapiexample.com/api/v1/employees").then(result => {
      console.log("result", result)
      setState(result.data.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className="App">
      {
        console.log("state", state)
      }
      <table style={{borrde:'1px solid #dddddd'}}>
        <tr>
          <th>Emp Name</th>
          <th>Emp Salary</th>
          <th>Emp Age</th>
        </tr>


        {state.map((data) => {
          return (
            <tr key={data.id}>
              <td>{data.employee_name}</td>
              <td>{data.employee_salary}</td>
              <td>{data.employee_age}</td>
            </tr>

          )
        })}

      
    </table>
    
    </div >
  );
}

export default App;
