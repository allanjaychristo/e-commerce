// src/Components/Header.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { Navbar, Container, Button, Badge } from "react-bootstrap";

const Header = () => {
  const { user, logout, loginWithGoogle } = useAuth();
  const { cart } = useCart();

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/">
          MPB Store
        </Navbar.Brand>

        <div className="d-flex align-items-center gap-2">
          <Button as={Link} to="/carrinho" variant="outline-light">
            Carrinho <Badge bg="danger">{cart.length}</Badge>
          </Button>

          {user ? (
            <>
              <span className="text-light">
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
      </Container>
    </Navbar>
  );
};

export default Header;
