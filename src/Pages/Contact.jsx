import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../styles.css";


export default function Contact() {
  return (
    <Container className="mt-5">

      {/* TÍTULO */}
      <Row className="mb-4 text-center">
        <Col>
          <h2>📬 Fale Conosco</h2>
          <p className="text-muted">
            Entre em contato e tire suas dúvidas com a MPB Vinil Store
          </p>
        </Col>
      </Row>

      <Row className="g-4">

        {/* INFORMAÇÕES DE CONTATO */}
        <Col md={5}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>📞 Nossos Contatos</Card.Title>

              <Card.Text className="mt-3">
                <strong>Email:</strong><br />
                mpbstore@gmail.com
              </Card.Text>

              <Card.Text>
                <strong>WhatsApp:</strong><br />
                (48) 99999-9999
              </Card.Text>

              <Card.Text>
                <strong>Atendimento:</strong><br />
                Segunda a sexta, das 9h às 18h
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* FORMULÁRIO */}
        <Col md={7}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>✉️ Envie uma Mensagem</Card.Title>

              <Form className="mt-3">

                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" placeholder="Digite seu nome" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Digite seu email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Escreva sua mensagem"
                  />
                </Form.Group>

                <Button variant="dark" type="submit">
                  Enviar Mensagem
                </Button>

              </Form>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
}
