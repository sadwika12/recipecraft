import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './first-static-page/pageheader';
import About from './pages/about';
import MainPage from './first-static-page/mainpage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;