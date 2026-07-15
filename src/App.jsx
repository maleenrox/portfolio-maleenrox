import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTerminal from './pages/MainTerminal';
import TheArmory from './pages/TheArmory';
import BlogList from './pages/TheGrid/BlogList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cyber-black text-cyber-text font-mono selection:bg-cyber-green selection:text-cyber-black">
        <Routes>
          <Route path="/" element={<MainTerminal />} />
          <Route path="/armory" element={<TheArmory />} />
          <Route path="/grid" element={<BlogList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;