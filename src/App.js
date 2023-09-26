import './App.css';
import Login from './Login';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import List from './Component/List';
import petRecord from './Component/petRecord';
import petStatus from './Component/petStatus';
import Status_post from './Component/status_post';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}></Route>
        <Route path='/petScare' element={<List/>}></Route>
        <Route path='/petRecord' element={<petRecord/>}></Route>
        <Route path='/petStat' element={<petStatus/>}></Route>
        <Route path='/petPost' element={<Status_post/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
