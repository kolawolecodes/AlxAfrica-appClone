import './App.css';
import Header from './components/Header';
import HeaderNavContextProvider from './components/HeaderNavContext';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <HeaderNavContextProvider>
       <Header />
       <Home />
      </HeaderNavContextProvider>
    </div>
  );
}

export default App;
