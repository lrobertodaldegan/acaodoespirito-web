import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu/MainMenu.js';
import ToTopButton from './components/ToTopButton/ToTopButton'
import Footer from './components/Footer/Footer.js';
import { Pages } from './pages/Pages.js';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'Ação do Espírito';
  }, []);

  
  
  return (
    <Router>
      <Routes>
        {Pages.map(page => <Route key={page.key} 
                                    path={page.path} 
                                    element={page.component} />)}
      </Routes>
      <ToTopButton />
    </Router>
  );
}

export default App;
