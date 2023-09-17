import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import List from './screen/List';
import petRecord from './screen/petRecord';
import petStatus from './screen/petStatus';
import Status_post from './screen/status_post';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={Login()}></Route>
        <Route path='/petScare' element={List()}></Route>
        <Route path='/petRecord' element={petRecord()}></Route>
        <Route path='/petStat' element={petStatus()}></Route>
        <Route path='/petPost' element={Status_post()}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
