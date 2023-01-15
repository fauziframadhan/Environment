import { Card, Button } from "react-bootstrap";
import { TIGAR } from "../routes";

const CardPengelolaanKetiga = (props) => {
  return (
    <Card style={{ width: "350px", height: "350px" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title style={{ fontSize: "25px", width: "290px" }}>
          {props.Title}
        </Card.Title>
        <Card.Text style={{ marginTop: "25px" }}>{props.isi}</Card.Text>
        <Button variant="outline-success" href={TIGAR}>
          Baca Selengkapnya
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPengelolaanKetiga;
