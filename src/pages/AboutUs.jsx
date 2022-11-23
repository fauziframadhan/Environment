import HOC from "../component/HOC";
import { Button, Container, Card } from "react-bootstrap";
import { HOME } from "../routes";
import AB from "./../Img/aboutus.png";
import Ft1 from "./../Img/fitur1.png";
import Ft2 from "./../Img/fitur2.png";
import Ft3 from "./../Img/fitur3.png";
import Reza from "./../Img/reza.png";
import Letty from "./../Img/letty.png";
import Hirdhan from "./../Img/hirdhan.png";
import Fauzi from "./../Img/fauzi.png";
import Edo from "./../Img/edo.png";
import Footer1 from "../component/Footer1";

const AboutUs = () => {
  return (
    <HOC HeaderTitle="AboutUs">
      <section className="kedua" style={{ marginBottom: "30px" }}>
        <img src={AB} alt="G3" />
        <div className="col-6 ">
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
              Home
            </a>
            - About Us
          </p>
          <h2 style={{ paddingBottom: "20px" }}>
            Apa itu Kalpataru? Kenali Kalpataru lebih dekat!
          </h2>
          <p style={{ textAlign: "justify", width: "700px" }}>
            Kalpataru merupakan sebuah website bertema lingkungan yang mendukung
            kelestarian lingkungan dengan berfokus pada pengelolaan sampah dan
            limbah. Kerusakan lingkungan yang terjadi disekitar kita sering kali
            disebabkan oleh banyaknya sampah dan limbah yang tidak terkelola
            dengan baik. Dengan itu, Kalpataru mengajak para penggunanya untuk
            meningkatkan kesadaran akan lingkungannya dengan mengajakan untuk
            melakukan gerakan 3R (Recycle, Reduce, Reuse). Kalpataru juga
            mengajak para penggunanya untuk berkontribusi dalam pengelolaan
            sampah dan pemanfaatan sampah yang mereka miliki, pengguna dapat
            mengirimkan sampahnya kepada mitra kalpataru. Pencapaian kontribusi
            tersebut dapat dihitung dengan akumulasi poin pengguna, poin yang
            dimiliki dapat disalurkan menjadi hal-hal yang bermanfaat.
          </p>
          <br />
          <Button variant="outline-success">Lihat Selengkapnya</Button>
          <br />
          <br />
        </div>
      </section>
      <section className="jumbotron2">
        <div style={{ height: "169px", color: "#EFF7F2", textAlign: "center" }}>
          <h1 style={{ paddingTop: "50px" }}>
            3 Fitur Utama Yang Disediakan Kalpataru
          </h1>
        </div>
      </section>
      <section style={{ marginBottom: "100px" }}>
        <Container
          className="row align-items-center"
          style={{
            marginLeft: "-170px",
            textAlign: "center",
            color: "#18A637",
          }}
        >
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Ft1} />
              <Card.Body>
                <Card.Text>Gerakan 3R</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Ft2} />
              <Card.Body>
                <Card.Text>Penukaran Sampah</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Ft3} />
              <Card.Body>
                <Card.Text>Donasi</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </section>
      <section>
        <div style={{ textAlign: "center" }}>
          <h3 style={{ color: "#18A637" }}>KALPATARU TEAM</h3>
          <p>Siapa saja yang bergerak dalam perjalanan kalpataru? </p>
        </div>
        <Container
          className="row"
          style={{
            marginLeft: "0px",
            textAlign: "center",
            color: "#18A637",
            marginTop: "60px",
            justifyContent: "space-around",
            marginBottom: "150px",
          }}
        >
          <div className="col-lg-2" style={{ color: "#000000" }}>
            <div style={{ width: "18rem" }}>
              <img variant="top" src={Reza} alt="Reza" />
              <p>
                <p>
                  <b>M. Fachreza Putra .P</b>
                </p>
                <p>Project Manager</p>
              </p>
            </div>
          </div>
          <div className="col-lg-2" style={{ color: "#000000" }}>
            <div style={{ width: "18rem" }}>
              <img variant="top" src={Letty} alt="Letty" />
              <p>
                <p>
                  <b>Letty Latifah</b>
                </p>
                <p>Hipster</p>
              </p>
            </div>
          </div>
          <div className="col-lg-2" style={{ color: "#000000" }}>
            <div style={{ width: "18rem" }}>
              <img variant="top" src={Hirdhan} alt="Hirdhan" />
              <p>
                <p>
                  <b>Hirdhan Farhan .A</b>
                </p>
                <p>Hipster</p>
              </p>
            </div>
          </div>
          <div className="col-lg-2" style={{ color: "#000000" }}>
            <div style={{ width: "18rem" }}>
              <img variant="top" src={Fauzi} alt="Fauzi" />
              <p>
                <p>
                  <b>Fauzi F Ramadhan</b>
                </p>
                <p>Hacker</p>
              </p>
            </div>
          </div>
          <div className="col-lg-2" style={{ color: "#000000" }}>
            <div style={{ width: "18rem" }}>
              <img variant="top" src={Edo} alt="Edo" />
              <p>
                <p>
                  <b>Edo Syeh S.M</b>
                </p>
                <p>Hacker</p>
              </p>
            </div>
          </div>
        </Container>{" "}
      </section>
      <section>
        <Footer1 />
      </section>
    </HOC>
  );
};

export default AboutUs;
