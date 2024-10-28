import { useState, createContext, useEffect } from 'react';
import { useFetch } from './hooks/Requests';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './views/Home';
import Websites from './views/Websites';
import Apis from './views/APIs';
import Pages from './views/Pages';
import About from './views/About';
import Login from './views/Login';

// components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Menu from './components/Menu';

// context
export const ContextData = createContext();

function App() {
  const [active, setActive] = useState({});
  const [toggle, setToggle] = useState(false);
  const [userData, setUserData] = useState(null);
  
  const contextValue = {
    active,
    setActive,
    toggle,
    setToggle,
    userData,
    setUserData
  }
  
  const { data } = useFetch('/user');
  
  useEffect(() => {
    if (data) setUserData(data.response);
  }, [data])
  
  return (
    <ContextData.Provider value={contextValue}>
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
            <Route path="/login" element={ <Login /> } />
          </Routes>
          <Navbar />
        </Router>
      </main>
    </ContextData.Provider>
  )
}

export default App
