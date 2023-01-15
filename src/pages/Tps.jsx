import HOC from "../component/HOC";
import tps2 from "./../Img/tps2.png";
import Footer1 from "../component/Footer1";
import { Button, Container } from "react-bootstrap";
import "./../style/Style.css";

const Tps = () => {
  return (
    <HOC HeaderTitle="TPS Terdekat">
      <section className="tps">
        <Container
          className="kedua"
          style={{
            background: "#FFFFFF",
            color: "#00000",
            width: "1120px",
            height: "300px",
            borderRadius: "20px",
          }}
        >
          <img
            src={tps2}
            alt="First slide"
            style={{
              width: "200px",
              height: "200px",
              marginTop: "45px",
            }}
          />
          <div
            className="col-8"
            style={{
              display: "flex",
              flexDirection: "column",
              flexFlow: "wrap",
              alignItems: "center",
              marginTop: "45px",
            }}
          >
            <h4 className="isislider">Temukan TPS Terdekat di Kotamu</h4>
            <br />
            <p
              style={{
                textAlign: "justify",
                marginRight: "100px",
              }}
            >
              Anda bisa menemukan Tempat Pembuangan Sampah terdekat, pada
              halaman ini anda dapat mengakses data yang berisi lokasi TPS
              terdekat di kota anda.
            </p>
            <br />
            <Button
              variant="success"
              style={{
                width: "201px",
                background: "#18A637",
                marginRight: "100px",
                padding: "10px",
                borderRadius: "8px",
                fontSize: "16px",
                marginBottom: "50px",
              }}
              href="#Next"
            >
              Lihat Selengkapnya
            </Button>{" "}
          </div>
        </Container>
      </section>
      <section className="jumbotron2" id="Next">
        <div style={{ height: "169px", color: "#EFF7F2", textAlign: "center" }}>
          <h1 style={{ paddingTop: "50px" }}>Daftar TPS terdekat di Kotamu</h1>
        </div>
      </section>
      <section style={{ marginBottom: "100px" }}>
        <div>
          <h1 style={{ textAlign: "center" }}> Under Constraction </h1>
        </div>
      </section>
      <section>
        <Footer1 />
      </section>
    </HOC>
  );
};

export default Tps;
