import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="sticky-navbar">
          <Navbar />
        </div>
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
