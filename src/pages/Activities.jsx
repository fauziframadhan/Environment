import HOC from "../component/HOC";
import ww2 from "./../Img/wwd1.png";
import Botol1 from "./../Img/botol.png";
import Botol2 from "./../Img/botol2.png";
import Botol3 from "./../Img/botol3.png";
import { Button, Card } from "react-bootstrap";

import "./../style/Style.css";
import { HOME } from "../routes";
import Footer1 from "../component/Footer1";

const Activities = () => {
  return (
    <HOC HeaderTitle="Activities">
      <section className="activity" style={{ marginBottom: "30px" }}>
        <img src={ww2} alt="G1" />
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
              Home
            </a>
            - Kontribusi Kalpataru
          </p>
          <h2 style={{ paddingBottom: "20px" }}>
            Apa Saja Kontribusi Kalpataru Terhadap Lingkungan?
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
          >
            Lihat Selengkapnya
          </Button>
          <br />
          <br />
        </div>
      </section>
      <section className="jumbotron2">
        <div style={{ height: "169px", color: "#EFF7F2", textAlign: "center" }}>
          <h1 style={{ paddingTop: "50px" }}>
            Kontribusi Kalpataru Untuk Lingkungan
          </h1>
        </div>
      </section>
      <section style={{ marginBottom: "100px" }}>
        <Card
          className="kedua"
          style={{ width: "1281px", marginLeft: "120px", justifyContent: "" }}
        >
          <img
            src={Botol1}
            alt="First slide"
            style={{
              width: "350px",
              height: "350px",
            }}
          />
          <div
            className="col-8"
            style={{
              textAlign: "justify",
              marginLeft: "400px",
              marginTop: "-250px",
              marginBottom: "70px",
            }}
          >
            <h4 className="isislider" style={{ color: "#18A637" }}>
              Gerakan Pengelolaan Limbah dengan 3R
            </h4>
            <br />
            <p>
              Mengajak semua orang untuk melakukan pengolahan limbah dengan
              berbagai kegiatan, Limbah yang anda kumpulkan dapat ditukarkan
              dengan barang olahan limbah yang menarik dan juga menghasil
              pendapatan tambahan.
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
              }}
            >
              Lihat Selengkapnya
            </Button>{" "}
          </div>
        </Card>
        <br />
        <Card
          className="kedua"
          style={{ width: "1281px", marginLeft: "120px", justifyContent: "" }}
        >
          <img
            src={Botol2}
            alt="second slide"
            style={{
              width: "350px",
              height: "350px",
            }}
          />
          <div
            className="col-8"
            style={{
              textAlign: "justify",
              marginLeft: "400px",
              marginTop: "-250px",
              marginBottom: "70px",
            }}
          >
            <h4 className="isislider" style={{ color: "#18A637" }}>
              Gerakan Menanam Pohon
            </h4>
            <br />
            <p>
              Mengajak semua orang untuk melakukan penghijauan dengan kegiatan
              interaktif, kontribusi anda dalam kegiatan ini akan
              didistribusikan dengan penanaman satu pohon. Penanaman pohon ini
              dilakukan berdasarkan poin yang anda tukarkan.
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
              }}
            >
              Lihat Selengkapnya
            </Button>{" "}
          </div>
        </Card>
        <br />
        <Card
          className="kedua"
          style={{ width: "1281px", marginLeft: "120px", justifyContent: "" }}
        >
          <img
            src={Botol3}
            alt="second slide"
            style={{
              width: "350px",
              height: "350px",
            }}
          />
          <div
            className="col-8"
            style={{
              textAlign: "justify",
              marginLeft: "400px",
              marginTop: "-250px",
              marginBottom: "70px",
            }}
          >
            <h4 className="isislider" style={{ color: "#18A637" }}>
              Temukan TPS Terdekat di Kotamu
            </h4>
            <br />
            <p>
              Anda bisa menemukan Tempat Pembuangan sampah Terdekat, pada
              halaman ini ini anda dapat mengkases data yang berisi lokasi TPS
              terdekat di kota anda.
            </p>
            <br />
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
              }}
            >
              Lihat Selengkapnya
            </Button>{" "}
          </div>
        </Card>
      </section>
      <section>
        <Footer1 />
      </section>
    </HOC>
  );
};

export default Activities;
