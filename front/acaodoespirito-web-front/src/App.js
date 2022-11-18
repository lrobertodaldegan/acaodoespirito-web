import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    </Router>
  );
}

export default App;
