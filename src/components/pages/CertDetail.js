import { Card, Breadcrumb, Button } from "react-bootstrap";
import ActionCard from "../cards/ActionCard";
import ContactCard from "../cards/ContactCard";
import { IoIosArrowBack } from "react-icons/io";

const CertDetail = (props) => {
  return (
    <>
      <ContactCard />
      <ActionCard />
      <Card>
        <Card.Header>
          <Breadcrumb>
            <Breadcrumb.Item href="#certifications">
              Certifications
            </Breadcrumb.Item>
            <Breadcrumb.Item active>View Certification</Breadcrumb.Item>
            <Button href="#certifications">
              <IoIosArrowBack /> Back
            </Button>
          </Breadcrumb>
        </Card.Header>
        <Card.Body>
          <Card.Title>General Info</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Title>NALS: Neonatal Advanced Life Support</Card.Title>
          <Card.Subtitle>VERFIFIED BY</Card.Subtitle>
          <Card.Text>American Academy of Pediatrics</Card.Text>
          <Card.Subtitle>COMPLETED ON</Card.Subtitle>
          <Card.Text>Apr 17, 2020</Card.Text>
          <Card.Subtitle>CERTIFICATE ID</Card.Subtitle>
          <Card.Text>ACD1653</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CertDetail;
