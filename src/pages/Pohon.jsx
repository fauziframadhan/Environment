import HOC from "../component/HOC";
import Pengelolaan1 from "./../Img/Pengelolaan.png";
import { Button } from "react-bootstrap";
import { HOME } from "../routes";
import Footer1 from "../component/Footer1";
import "./../style/Style.css";

const Pohon = () => {
  return (
    <HOC HeaderTitle="Tukar Pohon">
      <section className="activity" style={{ marginBottom: "30px" }} id="Pohon">
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
            Tukar Pohon
          </p>
          <h2 style={{ paddingBottom: "20px" }}>
            Tukar Poin Sampahmu dengan Berbagai kegiatan yang bermanfaat
          </h2>
          <p style={{ textAlign: "justify", width: "534px" }}>
            Kalpataru mengembangkan sistem informasi untuk menukarkan poin yang
            kamu peroleh dari penukaran sampah ke beberapa kegiatan bermanfaat
            seperti menanam pohon dan donasi.
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
          <h1 style={{ paddingTop: "50px" }}>
            Pilih Kegiatan Yang Kamu Inginkan
          </h1>
        </div>
      </section>
      <section id="Next" style={{ marginBottom: "100px" }}>
        <h1>Under Constraction</h1>
      </section>
      <section>
        <Footer1 />
      </section>
    </HOC>
  );
};

export default Pohon;
