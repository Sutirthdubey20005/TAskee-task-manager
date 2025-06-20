import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./components/Splash";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-white text-gray-800 font-sans">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

