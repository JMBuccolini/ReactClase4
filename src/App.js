import './App.css';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import BookList from './components/BookList';
import BookContextProvider from './components/BookContextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ThemeProvider from './components/ThemeProvider';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/Libros" element={<BookContextProvider><BookList /></BookContextProvider>} />
        </Routes>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
