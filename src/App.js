import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component as Navbar } from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="bg-[#1A0B2E] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;