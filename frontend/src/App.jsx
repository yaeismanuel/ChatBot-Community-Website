import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './views/Home';
import Websites from './views/Websites';
import Apis from './views/APIs';
import Pages from './views/Pages';
import About from './views/About';

// components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Menu from './components/Menu';

// context
export const ContextData = createContext();

function App() {
  const [active, setActive] = useState({});
  const [toggle, setToggle] = useState(false);
  
  return (
    <ContextData.Provider value={{ active, setActive, toggle, setToggle }}>
      <main>
        <Router>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/websites" element={ <Websites /> } />
            <Route path="/apis" element={ <Apis /> } />
            <Route path="/pages" element={ <Pages /> } />
            <Route path="/about" element={ <About /> } />
          </Routes>
          <Navbar />
        </Router>
      </main>
    </ContextData.Provider>
  )
}

export default App
