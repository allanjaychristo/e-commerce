import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/HomePage';
import Sobre from './Pages/About';
import Produto from './Pages/Produto';
import Erro from './Pages/Erro';
import Carrinho from './Pages/Carrinho';
import Contact from './Pages/Contact';
import Produtos from './Pages/ProductsPage';
import Cadastro from './Pages/Cadastro';
import EditProduto from './Pages/EditProduto';

import Header from './Components/Header';
import Footer from './Components/Footer';

function AppRoutes() {
  return (
      <Router>
      <div className="page-wrapper">

        <Header />

        <div className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/editar/:id" element={<EditProduto />} />
            <Route path="*" element={<Erro />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </Router>
  );
}

export default AppRoutes;
