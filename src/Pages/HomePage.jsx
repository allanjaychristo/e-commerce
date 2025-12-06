import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "../styles.css";


export default function HomePage() {

  const destaques = [
    {
      id: 1,
      nome: "Vinil Rita Lee",
      descricao: "Rita Lee 1979 - Mania de Você",
      preco: "R$ 129,90",
      imagem: "/img/maniadevoce.jpg"
    },
    {
      id: 2,
      nome: "Vinil Tim Maia",
      descricao: "Clássicos do soul brasileiro.",
      preco: "R$ 149,90",
      imagem: "/img/timmaia.jpg"
    },
    {
      id: 3,
      nome: "Poster MPB",
      descricao: "Decoração retrô para fãs de MPB.",
      preco: "R$ 39,90",
      imagem: "/img/mpbposter.jpg"
    },
    {
      id: 4,
      nome: "Vinil Chico Buarque",
      descricao: "MPB clássica em edição de luxo.",
      preco: "R$ 139,90",
      imagem: "/img/chico.jpeg"
    }
  ];

  return (
    <>
      <Carousel className="banner-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="/img/banner1.jpg"
            alt="Primeiro slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="/img/banner2.jpg"
            alt="Segundo slide"
          />
        </Carousel.Item>
      </Carousel>


      {/* ✅ CONTEÚDO COM PADDING NORMAL */}
      <Container className="text-center mt-4">

        <h1>🎵 MPB Store</h1>
        <p>Discos de vinil e acessórios da música brasileira</p>

        <h3 className="mt-4 mb-4">🔥 Produtos em Destaque</h3>

        <Row className="justify-content-center g-4">
          {destaques.map((produto) => (
            <Col key={produto.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={produto.imagem}
                  style={{
                    height: "160px",
                    objectFit: "cover"
                  }}
                />

                <Card.Body className="d-flex flex-column p-3">
                  <Card.Title className="fs-6">
                    {produto.nome}
                  </Card.Title>

                  <Card.Text style={{ fontSize: "14px" }}>
                    {produto.descricao}
                  </Card.Text>

                  <strong className="mb-2">{produto.preco}</strong>

                  <Button
                    variant="success"
                    size="sm"
                    className="mt-auto"
                  >
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="mt-4">
          <Button as={Link} to="/produtos" variant="dark">
            Ver Todos os Produtos
          </Button>
        </div>

      </Container>
    </>
  );
}
