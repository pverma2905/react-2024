import './App.css';
import ComponentFirst from './componentFirst';
import ComponentSecond from './componentSecond';
import { ContextProvider } from './CreateContext';

function App() {
  return (
    <ContextProvider>
    <div className="App">
     <ComponentFirst/>
     <ComponentSecond/>
    </div>
    </ContextProvider>
  );
}

export default App;
