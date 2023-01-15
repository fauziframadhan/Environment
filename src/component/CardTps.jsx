import { Card, Button } from "react-bootstrap";
import { APA } from "../routes";
import "./../style/Style.css";

const CardTps = (props) => {
  return (
    <Card style={{ width: "1000px", height: "300px" }}>
      <Card.Img
        src={props.image}
        variant="left"
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <Card.Body variant="right">
        <Card.Title style={{ fontSize: "25px" }}>{props.Title}</Card.Title>
        <Card.Text style={{ marginTop: "0" }}>{props.isi}</Card.Text>
        <Button variant="outline-success" href={APA}>
          Baca Selengkapnya
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardTps;
