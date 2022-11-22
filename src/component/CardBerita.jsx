import { Card, Button } from "react-bootstrap";

const CardBerita = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Text>{props.isi}</Card.Text>
        <Button variant="outline-success">Baca Selengkapnya</Button>
      </Card.Body>
    </Card>
  );
};

export default CardBerita;
