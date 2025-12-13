import { Container } from "react-bootstrap";
import "../styles.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container className="text-center">
        <p className="mb-0">
          © 2025 MPB Store — Todos os direitos reservados
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
