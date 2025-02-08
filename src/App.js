import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Roles from './pages/Roles';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Forensic Clues</Link>
            </li>
            <li>
              <Link to="/roles">Roles</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/roles" element={<Roles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;