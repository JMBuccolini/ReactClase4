import './App.css';
import BookContextProvider from './components/BookContextProvider';
import BookList from './components/BookList';
import Header from './components/Header';
import ThemeProvider from './components/ThemeProvider';
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
        <Header />
      </ThemeProvider>

    </div>
  );
}

export default App;
