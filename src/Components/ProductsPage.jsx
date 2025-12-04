import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const produtos = [
  { id: 1, nome: "Vinil - Chico Buarque", preco: 120 },
  { id: 2, nome: "Vinil - Elis Regina", preco: 140 },
  { id: 3, nome: "Camisa MPB", preco: 80 },
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Produtos</h2>

      <Row>
        {produtos.map((p) => (
          <Col md={4} key={p.id} className="mb-3">
            <Card>
              <Card.Body className="text-center">
                <Card.Title>{p.nome}</Card.Title>
                <Card.Text>R$ {p.preco}</Card.Text>
                <Button onClick={() => addToCart(p)} variant="success">
                  Adicionar ao Carrinho
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
