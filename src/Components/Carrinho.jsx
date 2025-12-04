import { Container, Button, ListGroup } from "react-bootstrap";
import { useCart } from "../context/CartContext";

export default function Carrinho() {
  const { cart, removeFromCart } = useCart();

  return (
    <Container className="mt-4">
      <h2>Carrinho</h2>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item key={item.id} className="d-flex justify-content-between">
              {item.nome} - R$ {item.preco}
              <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                Remover
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
}
