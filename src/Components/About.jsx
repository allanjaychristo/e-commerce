import { Container, Row, Col, Card } from "react-bootstrap";

export default function About() {
  return (
    <Container className="mt-5">

      {/* TÍTULO */}
      <Row className="mb-4 text-center">
        <Col>
          <h2>🎵 Sobre a MPB Vinil Store</h2>
          <p className="text-muted">
            Conheça mais sobre nossa história e paixão pela música brasileira
          </p>
        </Col>
      </Row>

      {/* CONTEÚDO */}
      <Row className="align-items-center g-4">

        {/* TEXTO */}
        <Col md={6}>
          <Card className="shadow-sm p-3 h-100">
            <Card.Body>
              <Card.Title>Nossa Missão</Card.Title>
              <Card.Text>
                Somos apaixonados pela música brasileira. Aqui você encontra
                vinis clássicos, camisas temáticas, acessórios e itens exclusivos
                que celebram a verdadeira MPB.
              </Card.Text>

              <Card.Title>Nosso Objetivo</Card.Title>
              <Card.Text>
                Levar a cultura da MPB para todos os cantos do Brasil,
                valorizando artistas, histórias e a experiência única de ouvir
                música em vinil.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* DESTAQUES */}
        <Col md={6}>
          <Row className="g-3">

            <Col sm={6}>
              <Card className="text-center shadow-sm h-100">
                <Card.Body>
                  <h1>🎧</h1>
                  <Card.Title>Qualidade</Card.Title>
                  <Card.Text>
                    Produtos revisados com alto padrão.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6}>
              <Card className="text-center shadow-sm h-100">
                <Card.Body>
                  <h1>🚚</h1>
                  <Card.Title>Entrega Rápida</Card.Title>
                  <Card.Text>
                    Enviamos para todo o Brasil.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6}>
              <Card className="text-center shadow-sm h-100">
                <Card.Body>
                  <h1>💿</h1>
                  <Card.Title>Exclusividade</Card.Title>
                  <Card.Text>
                    Itens raros e colecionáveis.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6}>
              <Card className="text-center shadow-sm h-100">
                <Card.Body>
                  <h1>❤️</h1>
                  <Card.Title>Paixão</Card.Title>
                  <Card.Text>
                    Feito por quem ama MPB.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Col>

      </Row>

    </Container>
  );
}
