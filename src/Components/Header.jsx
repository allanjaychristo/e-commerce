// src/Components/Header.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { Navbar, Container, Button, Badge, Nav } from "react-bootstrap";
import "../styles.css";


const Header = () => {
  const { user, logout, loginWithGoogle } = useAuth();
  const { cart } = useCart();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>

        <Navbar.Brand as={Link} to="/">
          🎵 MPB Store
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/produtos">Produtos</Nav.Link>
            <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
            <Nav.Link as={Link} to="/cadastro">Cadastrar</Nav.Link>

          </Nav>

          <div className="d-flex align-items-center gap-2">

            <Button as={Link} to="/carrinho" variant="outline-light">
              🛒 Carrinho{" "}
              <Badge bg="danger">{cart.length}</Badge>
            </Button>

            {user ? (
              <>
                <span className="text-light small">
                  Olá, {user.displayName || user.email}
                </span>

                <Button variant="danger" onClick={logout}>
                  Sair
                </Button>
              </>
            ) : (
              <Button variant="success" onClick={loginWithGoogle}>
                Entrar com Google
              </Button>
            )}

          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;
