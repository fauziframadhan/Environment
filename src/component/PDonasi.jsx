import "./../style/Style.css";
import { Button } from "react-bootstrap";
import Chart1 from "./../Img/Chart.png";
import Pd from "./../Img/pdonasi.png";

const PDonasi = () => {
  return (
    <section className="kedua">
      <div className="col-4 ">
        <h4>Salurkan Donasi Anda Melalui Kalpataru</h4>
        <br />
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <br />
        <img
          src={Pd}
          alt="Pd1"
          style={{ width: "600px", marginLeft: "-10px" }}
        />
        <br />
        <br />
        <br />
        <Button
          variant="success"
          style={{
            width: "146px",
            background: "#18A637",
            marginLeft: "100px",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "16px",
            marginLeft: "-10px",
          }}
        >
          Mulai Donasi
        </Button>{" "}
      </div>
      <img src={Chart1} alt="Gambar1" />
    </section>
  );
};

export default PDonasi;
