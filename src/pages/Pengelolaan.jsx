import HOC from "../component/HOC";
import Pengelolaan1 from "./../Img/Pengelolaan.png";
import { Button, Container } from "react-bootstrap";
import { HOME } from "../routes";
import CardPengelolaan from "../component/CardPengelolaan";
import CardPengelolaanKedua from "../component/CardPengelolaanKedua";
import CardPengelolaanKetiga from "../component/CardPengelolaanKetiga";
import Footer1 from "../component/Footer1";
import "./../style/Style.css";

const Pengelolaan = () => {
  return (
    <HOC HeaderTitle="Pengelolaan Sampah">
      <section
        className="activity"
        style={{ marginBottom: "30px" }}
        id="Pengelolaan"
      >
        <img src={Pengelolaan1} alt="G2" />
        <div className="col-4 ">
          <p
            className=""
            style={{
              marginLeft: "0px",
              marginBottom: "50px",
              marginTop: "-50px",
            }}
          >
            <a
              class="text-muted"
              href={HOME}
              style={{ textUnderlinePosition: "none" }}
            >
              Home -
            </a>
            Pengelolaan Limbah
          </p>
          <h2 style={{ paddingBottom: "20px" }}>
            Peran Kalpataru terhadap pengolahan Limbah
          </h2>
          <p style={{ textAlign: "justify", width: "534px" }}>
            Kalpataru memilih berperan dalam melestarikan lingkungan hidup.
            Kalpataru memilih berperan dalam melestarikan lingkungan hidup.
            Kalpataru memilih berperan dalam melestarikan lingkungan hidup.
            Kalpataru memilih berperan dalam melestarikan lingkungan hidup.
            Kalpataru memilih berperan dalam melestarikan lingkungan hidup.
            Kalpataru memilih berperan dalam melestarikan lingkungan hidup.
          </p>
          <br />
          <Button
            variant="success"
            style={{
              width: "168px",
              height: "48px",
              background: "#18A637",
              padding: "10px",
              borderRadius: "8px",
              fontSize: "16px",
              textAlign: "center",
            }}
            href="#Next"
          >
            Lihat Selengkapnya
          </Button>
          <br />
          <br />
        </div>
      </section>
      <section className="jumbotron2" id="Next">
        <div style={{ height: "169px", color: "#EFF7F2", textAlign: "center" }}>
          <h3 style={{ paddingTop: "50px" }}> Sampahmu Jadi Berkah</h3>
          <h1 style={{ paddingTop: "0px" }}>Bagaimana caranya?</h1>
        </div>
      </section>
      <section style={{ marginBottom: "300px" }}>
        <Container
          className="row align-items-center"
          style={{ marginLeft: "-270px" }}
        >
          <div className="col-lg-3" style={{ marginLeft: "100px" }}>
            <CardPengelolaan
              Title="Apa Sampahmu?"
              isi="Dari semua aktivitas mu sisa produk apa saja yang dihasilkan? Plastik? Kertas? atau sampah organik lainnya?"
            />
          </div>
          <div className="col-lg-3" style={{ marginLeft: "100px" }}>
            <CardPengelolaanKedua
              Title="Kemana Sampahmu?"
              isi="Sisa produk yang kamu gunakan sehari-hari berujung di tempat sampah"
            />
          </div>
          <div
            className="col-lg-3"
            style={{ marginLeft: "100px", marginRight: "20px" }}
          >
            <CardPengelolaanKetiga
              Title="Bagaimana Daur Ulangnya?"
              isi="Kamu bisa memilah sisa produkmu dan berbagi dengan pengelola sampah"
            />
          </div>
        </Container>
      </section>
      <section>
        <Footer1 />
      </section>
    </HOC>
  );
};

export default Pengelolaan;
