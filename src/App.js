import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import SidebarRight from './Components/SidebarRight/SidebarRight';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/sidebar" element={<SidebarRight />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
