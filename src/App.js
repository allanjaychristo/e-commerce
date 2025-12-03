// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react';
import './styles.css';

import Header from './Components/Header';
import Navigation from './Components/Navigation';

import Home from './Components/HomePage'; // exemplo
import Produtos from './Components/ProductsPage'; // exemplo
import Sobre from './Components/About';
import Contato from './Components/Contact';

import Footer from './Components/Footer';

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
