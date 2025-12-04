import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


export default function HomePage() {
  return (
    <Container className="text-center mt-5">
      <h1>🎵 MPB Store</h1>
      <p>Discos de vinil e acessórios da música brasileira</p>
      <br></br>

       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/banner1.jpg"
          alt="Primeiro slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/banner2.jpg"
          alt="Segundo slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      <br></br>
      <Button as={Link} to="/produtos" variant="dark">
        Ver Produtos
      </Button>
    </Container>
  );
}
