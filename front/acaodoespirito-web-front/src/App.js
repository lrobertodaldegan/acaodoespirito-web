import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainMenu from './components/MainMenu/';
import './App.css';

function App() {
  let Home = () => <><div>Home</div></>;
  let About = () => <div>About</div>;
  return (
    <Router>
      <MainMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
