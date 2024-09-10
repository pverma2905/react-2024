import './App.css';
import Sidebar from './sidebar';
import Dashboard from './screens/dashboard';
import Contact from './screens/contact';
import Subscription from './screens/subscription';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     {/* <Sidebar/> */}
     <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/subscription" element={<Subscription/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
