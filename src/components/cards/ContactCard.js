import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import EmailUsCard from "./EmailUsCard";
import PhoneUsCard from "./PhoneUsCard";

const ContactCard = () => {
  return (
    <>
      <Card className="contact-card">
        <Card.Header className="contact-header">Contact</Card.Header>
        <Card.Body>
          <Card.Text>
            Need help with something that isn’t covered in our
            documentation? Reach out to a customer support
            representative.
          </Card.Text>
          <Container>
            <Row>
              <PhoneUsCard />
              <EmailUsCard />
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default ContactCard;
