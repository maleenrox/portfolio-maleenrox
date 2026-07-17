import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainTerminal from './pages/MainTerminal';
import TheArmory from './pages/TheArmory';
import BlogList from './pages/TheGrid/BlogList';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<MainTerminal />} />
          <Route path="/armory" element={<TheArmory />} />
          <Route path="/grid" element={<BlogList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;