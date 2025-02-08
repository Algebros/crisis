import './App.css';
import React from 'react';
import { HashRouter, BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Roles from './pages/Roles';
import InteractiveMap from './pages/InteractiveMap'; // Import the new component

function App() {
  return (
    <HashRouter>
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
            <li>
              <Link to="/map">Map</Link> {/* Add a new link for the map */}
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/map" element={<InteractiveMap />} /> {/* Add a new route for the map */}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;