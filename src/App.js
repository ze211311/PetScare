import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import List from './Component/List';
import petRecord from './Component/petRecord';
import petStatus from './Component/petStatus';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={Login()}></Route>
        <Route path='/petScare' element={List()}></Route>
        <Route path='/petRecord' element={petRecord()}></Route>
        <Route path='/petStat' element={petStatus()}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
