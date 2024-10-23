import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './views/Home';
import About from './views/About';

// components
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  )
}

export default App
