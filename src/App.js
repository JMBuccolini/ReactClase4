import './App.css';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import BookList from './components/BookList';
import Libros from './components/Libros';
import Header from './components/Header';
import ThemeProvider from './components/ThemeProvider';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/Libros" element={<Libros><BookList /></Libros>} />
        </Routes>
      </Router>
        <ThemeProvider><Header /></ThemeProvider>
    </div>
  );
}

export default App;
