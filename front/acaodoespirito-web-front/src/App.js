import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import MainMenu from './components/MainMenu/MainMenu.js';
import './App.css';
import HomePage from './pages/Home/HomePage.js';
import ToTopButton from './components/ToTopButton/ToTopButton'
import Footer from './components/Footer/Footer.js';

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
      <Footer />
      <ToTopButton />
    </Router>
  );
}

export default App;
