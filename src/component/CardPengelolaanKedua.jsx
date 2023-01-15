import { Card, Button } from "react-bootstrap";
import { PERJALANAN } from "../routes";

const CardPengelolaanKedua = (props) => {
  return (
    <Card style={{ width: "350px", height: "350px" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title style={{ fontSize: "25px" }}>{props.Title}</Card.Title>
        <Card.Text style={{ marginTop: "60px" }}>{props.isi}</Card.Text>
        <Button variant="outline-success" href={PERJALANAN}>
          Baca Selengkapnya
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPengelolaanKedua;
