import { Card, Breadcrumb, Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import "./CertDetail.css";

const CertDetail = (props) => {
  return (
    <>
      <h2>View Certification</h2>
      <Card className="cert-detail-card">
        <Card.Header>
          <Breadcrumb>
            <Breadcrumb.Item href="/certifications">
              Certifications
            </Breadcrumb.Item>
            <Breadcrumb.Item active>View Certification</Breadcrumb.Item>
            <Button href="/certifications" className="back-button">
              <IoIosArrowBack /> Back
            </Button>
          </Breadcrumb>
        </Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <Card.Title>General Info</Card.Title>
              </Col>
              <Col xs={6}>
                <Card.Body>
                  <Card.Title>
                    NALS: Neonatal Advanced Life Support
                  </Card.Title>
                  <Card.Subtitle>VERFIFIED BY</Card.Subtitle>
                  <Card.Text>American Academy of Pediatrics</Card.Text>
                  <Card.Subtitle>COMPLETED ON</Card.Subtitle>
                  <Card.Text>Apr 17, 2020</Card.Text>
                  <Card.Subtitle>CERTIFICATE ID</Card.Subtitle>
                  <Card.Text>ACD1653</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default CertDetail;
