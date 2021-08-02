import { Card } from "react-bootstrap/Card";
import { Button } from "react-bootstrap/Button";
import { FaPhoneVolume } from "react-icons/fa";

const PhoneUsCard = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>PHone Support</Card.Title>
        <Card.Text>
          Our phone lines are open from 8am-5pm CST to answer your
          questions.
        </Card.Text>
        <Button>
          <FaPhoneVolume />
        </Button>
        <Button>1-800-521-0574</Button>
      </Card.Body>
    </Card>
  );
};

export default PhoneUsCard;
