import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";
import Card from "react-bootstrap/Card";

const ActionCard = () => {
  return (
    <Card className="action-card">
      <Card.Body>
        <EditButton />
        <DeleteButton />
      </Card.Body>
    </Card>
  );
};

export default ActionCard;
