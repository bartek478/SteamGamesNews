import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import GameNews from './GameNews';
import Docs from './Docs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path='/news' element={<GameNews/>}>News</Route>
          <Route path='/docs' element={<Docs/>}>Docs</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
