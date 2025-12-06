import { Container, Button, ListGroup, Row, Col, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles.css";


export default function Carrinho() {
  const { cart, removeFromCart } = useCart();

  // Cálculo do total
  const total = cart.reduce((soma, item) => soma + item.preco, 0);

  return (
    <Container className="mt-4">

      <h2 className="text-center mb-4">🛒 Seu Carrinho</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <p>Seu carrinho está vazio.</p>
          <Button as={Link} to="/produtos" variant="dark">
            Ver Produtos
          </Button>
        </div>
      ) : (
        <Row className="g-4">

          {/* LISTA DE PRODUTOS */}
          <Col md={8}>
            <ListGroup>
              {cart.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.nome}</strong><br />
                    <span className="text-muted">R$ {item.preco},00</span>
                  </div>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remover
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* RESUMO DA COMPRA */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Resumo do Pedido</Card.Title>

                <hr />

                <p>
                  <strong>Total:</strong><br />
                  R$ {total},00
                </p>

                <div className="d-grid gap-2">
                  <Button variant="success">
                    Finalizar Compra
                  </Button>

                  <Button as={Link} to="/produtos" variant="outline-dark">
                    Continuar Comprando
                  </Button>
                </div>

              </Card.Body>
            </Card>
          </Col>

        </Row>
      )}

    </Container>
  );
}
