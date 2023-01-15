import HOC from "../component/HOC";
import Pengelolaan1 from "./../Img/Pengelolaan.png";
import { Button } from "react-bootstrap";
import { HOME } from "../routes";
import Footer1 from "../component/Footer1";
import "./../style/Style.css";

const Volunteer = () => {
  return (
    <HOC HeaderTitle="Join Volunteer">
      <section
        className="activity"
        style={{ marginBottom: "30px" }}
        id="Volunteer"
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
            Join Volunteer
          </p>
          <h2 style={{ paddingBottom: "20px" }}>
            Ayo Bergabung Menjadi Volunteer Untuk Melestarikan Lingkungan
          </h2>
          <p style={{ textAlign: "justify", width: "534px" }}>
            Kalpataru juga menyediakan fitur untuk menjadi Volunteer yang
            berguna untuk mengetahui event Pelestarian Lingkungan yang akan
            diselenggarakan baik secara offline maupun online. Dan juga disini
            kita dapat mendaftar menjadi sukarelawan atau volunteer dari event
            tersebut yang membutuhkan atau kekurangan relawan.
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
            Event - event Kalpataru Untuk Lingkungan
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

export default Volunteer;
