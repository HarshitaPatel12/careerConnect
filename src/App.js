import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/profile" element={<Profile />} />
       
        </Routes>
    </div>
  );
}

export default App;
