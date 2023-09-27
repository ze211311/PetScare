import './App.css';
import Login from './Login';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import List from './Component/List';
import Status_post from './Component/status_post';
import PetRecord from './Component/petRecord.js';
import PetStatus from './Component/petStatus.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path='/petScare' element={<List />}></Route>
        <Route path='/petRecord' element={<PetRecord />}></Route>
        <Route path='/petStat' element={<PetStatus />}></Route>
        <Route path='/petPost' element={<Status_post />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
