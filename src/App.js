// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';

import HomePage from './Components/HomePage';
import ProductsPage from './Components/ProductsPage';
import About from './Components/About';
import Contact from './Components/Contact';
import Carrinho from './Components/Carrinho';

import { CartProvider } from "./context/CartContext";

import "./styles.css";


function App() {
  return (
    <CartProvider>
      <Router>
      <div className="d-flex flex-column min-vh-100">

        <Header />

        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
