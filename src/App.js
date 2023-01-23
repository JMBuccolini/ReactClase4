import './App.css';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import BookList from './components/BookList';
import BookContextProvider from './components/BookContextProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/Libros" element={<BookContextProvider><BookList /></BookContextProvider>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
