import Card from "react-bootstrap/Card";
import EmailUsCard from "./EmailUsCard";
import PhoneUsCard from "./PhoneUsCard";

const ContactCard = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <Card.Text>
            Need help with something that isn’t covered in our
            documentation? Reach out to a customer support
            representative.
          </Card.Text>
          <PhoneUsCard />
          <EmailUsCard />
        </Card.Body>
      </Card>
    </>
  );
};

export default ContactCard;
