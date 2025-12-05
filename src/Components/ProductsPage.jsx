import { Card, Button, Container, Row, Col, Navbar, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const produtos = [
  {
    id: 1,
    nome: "Vinil - Chico Buarque",
    preco: 120,
    descricao: "Disco clássico com os maiores sucessos de Chico Buarque.",
    imagem: "/img/chico.jpeg"
  },
  {
    id: 2,
    nome: "Vinil - Elis Regina",
    preco: 140,
    descricao: "Voz marcante da MPB em uma coletânea especial em vinil.",
    imagem: "/img/elis.jpeg"
  },
  {
    id: 3,
    nome: "Camisa Djavan",
    preco: 80,
    descricao: "Camiseta estilizada para fãs da música popular brasileira.",
    imagem: "/img/camiseta.jpeg"
  },
];

export default function ProductsPage() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [busca, setBusca] = useState("");

  function comprarAgora(produto) {
    addToCart(produto);
    navigate("/carrinho");
  }

  // FILTRO DOS PRODUTOS
  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Container className="mt-4">

      {/* 🔍 NAVBAR DE PESQUISA */}
      <Navbar className="mb-4 bg-light p-3 rounded shadow-sm">
        <Form className="w-100">
          <Form.Control
            type="text"
            placeholder="Pesquisar produto..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </Form>
      </Navbar>

      <h2 className="text-center mb-4">🛍️ Produtos</h2>

      <Row className="g-4">
        {produtosFiltrados.length === 0 ? (
          <p className="text-center">Nenhum produto encontrado.</p>
        ) : (
          produtosFiltrados.map((p) => (
            <Col md={4} key={p.id}>
              <Card className="h-100 shadow-sm">

                <Card.Img
                  variant="top"
                  src={p.imagem}
                  style={{
                    height: "220px",
                    objectFit: "cover"
                  }}
                />

                <Card.Body className="text-center d-flex flex-column">

                  <Card.Title>{p.nome}</Card.Title>

                  <Card.Text style={{ fontSize: "14px", color: "#555" }}>
                    {p.descricao}
                  </Card.Text>

                  <Card.Text className="fs-5 fw-bold">
                    R$ {p.preco},00
                  </Card.Text>

                  <div className="mt-auto d-grid gap-2">
                    <Button
                      variant="success"
                      onClick={() => addToCart(p)}
                    >
                      Adicionar ao Carrinho
                    </Button>

                    <Button
                      variant="dark"
                      onClick={() => comprarAgora(p)}
                    >
                      Comprar Agora
                    </Button>
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}
