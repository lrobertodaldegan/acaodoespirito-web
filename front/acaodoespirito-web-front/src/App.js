import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import MainMenu from './components/MainMenu/MainMenu.js';
import './App.css';
import HomePage from './pages/Home/HomePage.js';

function App() {
  useEffect(() => {
    document.title = 'Ação do Espírito';
  }, []);

  
  let About = () => <div>About</div>;
  
  return (
    <Router>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
