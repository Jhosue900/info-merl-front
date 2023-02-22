import './App.css';
import NavBar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Panel from './components/panel';
import CreateInfo from './components/create';
import Delete from './components/delete';
import All from './components/all';

function App() {
  return (
    <div className="App">
      <NavBar /><br/>

      <Routes>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/panel" element={ <Panel/> }/>
        <Route path="/create" element={ <CreateInfo/> }/>
        <Route path="/delete" element={ <Delete/> }/>
        <Route path="/" element={<All />} />
      </Routes>
      



      
    </div>
  );
}

export default App;
