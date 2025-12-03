// src/Components/Header.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { user, logout, loginWithGoogle } = useAuth();
  const { cart } = useCart();

  return (
    <header className="header">
      <h1>MPB Store</h1>

      <Link to="/carrinho">
        🛒 Carrinho ({cart.length})
      </Link>

      <div>
        {user ? (
          <>
            <span>
              Olá, {user.displayName || user.email}
            </span>
            <button onClick={logout}>
              Sair
            </button>
          </>
        ) : (
          <button onClick={loginWithGoogle}>
            Entrar com Google
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;