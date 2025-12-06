import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/HomePage';
import Sobre from './Pages/About';
import Produto from './Pages/Produto';
import Erro from './Pages/Erro';
import Carrinho from './Pages/Carrinho';
import Contact from './Pages/Contact';
import Produtos from './Pages/ProductsPage';

import Header from './Components/Header';
import Footer from './Components/Footer';

function AppRoutes() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="*" element={<Erro />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default AppRoutes;
