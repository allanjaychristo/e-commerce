// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

import HomePage from './Components/HomePage';
import ProductsPage from './Components/ProductsPage';
import About from './Components/About';
import Contact from './Components/Contact';
import Carrinho from './Components/Carrinho';

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
