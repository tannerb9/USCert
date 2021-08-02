import { Card } from "react-bootstrap/Card";
import { Button } from "react-bootstrap/Button";
import { HiOutlineMail } from "react-icons/hi";

const EmailUsCard = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Email Support</Card.Title>
        <Card.Text>
          Send us an email with your question and our support team will
          get back to you.
        </Card.Text>
        <Button>
          <HiOutlineMail />
        </Button>
        <Button>Launch Email</Button>
      </Card.Body>
    </Card>
  );
};

export default EmailUsCard;
