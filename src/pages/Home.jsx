import HOC from "../component/HOC";
import Bg from "./../Img/bghome.png";
import Bg1 from "./../Img/gambar1.png";
import Logo1 from "./../Img/earth.png";
import Logo2 from "./../Img/arrow.png";
import Berita1 from "./../Img/berita1.png";
import Berita2 from "./../Img/berita2.png";
import Berita3 from "./../Img/berita3.png";
import Berita4 from "./../Img/berita4.png";
import Sampah from "./../Img/sampah.png";
import "./../style/Style.css";
import { Button, Container } from "react-bootstrap";
import AboutUs from "./AboutUs";
// import Footer from "../component/Footer";
import Footer1 from "../component/Footer1";
import Slider from "../component/Slider";
import CardBerita from "../component/CardBerita";
import PDonasi from "../component/PDonasi";
import { KIRIM } from "../routes";
const Home = () => {
  return (
    <HOC>
      <section className="background">
        <img src={Bg} alt="Bg" style={{ width: "100%" }} />
        <div className="text">
          <p className="judul">Save Environment</p>
          <p className="title">Save Your Live</p>
          <p className="slogan">
            Ayo selamatkan lingkungan kita hari ini, demi menyelamatkan
            <br />
            lingkungan pada masa depan
          </p>
        </div>
        <div className="card text-center">
          <div className="card-body">
            Ayo mulai selamatkan lingkungan, mulai dari diri anda!
            <Button
              variant="success"
              style={{
                width: "154px",
                background: "#18A637",
                marginLeft: "100px",
                padding: "10px",
                borderRadius: "8px",
                fontSize: "16px",
              }}
            >
              Mulai Jelajahi
            </Button>{" "}
          </div>
        </div>
        <section className="kedua">
          <img src={Bg1} alt="Gambar1" />
          <div className="col-4 ">
            <h2>Apa itu Kalpataru & Kenapa itu Penting?</h2>
            <p style={{ textAlign: "justify" }}>
              Kalpataru merupakan sebuah website bertema lingkungan yang
              mendukung kelestarian lingkungan dengan berfokus pada pengelolaan
              sampah dan limbah. Kerusakan lingkungan yang terjadi disekitar
              kita sering kali disebabkan oleh banyaknya sampah dan limbah yang
              tidak terkelola dengan baik. Dengan itu, Kalpataru mengajak para
              penggunanya untuk meningkatkan kesadaran akan lingkungannya dengan
              mengajakan untuk melakukan gerakan 3R (Recycle, Reduce, Reuse).
              Kalpataru juga mengajak para penggunanya untuk berkontribusi dalam
              pengelolaan sampah dan pemanfaatan sampah yang mereka miliki,
              pengguna dapat mengirimkan sampahnya kepada mitra kalpataru.
              Pencapaian kontribusi tersebut dapat dihitung dengan akumulasi
              poin pengguna, poin yang dimiliki dapat disalurkan menjadi hal-hal
              yang bermanfaat.
            </p>
            <br />
            <br />
            <p>
              Cari tahu tentang kami <a href={AboutUs}>Disini</a>
            </p>
            <hr />
            <p>
              <img
                src={Logo1}
                alt="Logo1"
                style={{ width: "30px", marginRight: "10px" }}
              />
              Mulai langkahmu untuk selamatkan lingkungan
              <br />
              <p style={{ color: "#18A637", marginLeft: "40px" }}>
                Ayo bergabung bersama kami <img src={Logo2} alt="Logo2" />
              </p>
            </p>
          </div>
        </section>
      </section>
      <section className="geser">
        <h4
          style={{ marginTop: "-70PX", marginLeft: "70px", color: "#FFFFFF" }}
        >
          Kontribusi Kalpataru Untuk Lingkungan
        </h4>
        <hr style={{ color: "#FFFFFF", border: "solid" }} />
        <Slider />
      </section>
      <section>
        <PDonasi />
      </section>
      <section className="jumbotron">
        <div>
          <img src={Sampah} alt="Sampah" />
          <div className="text2">
            <h3 style={{ paddingBottom: "50px" }}>
              Ayo mulai berkontribusi bersama kalpataru dalam pengurangan sampah
            </h3>
            <p style={{ fontSize: "18px" }}>
              Mulai perjalanan anda bersama kalpataru dalam menyelamatkan
              lingkungan, dimulai
              <br /> dari pengolahan sampah yang anda miliki.
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
              href={KIRIM}
            >
              Mulai Sekarang
            </Button>{" "}
          </div>
        </div>
      </section>
      <section className="berita">
        <div
          className="col-12 text-start my-5"
          style={{ marginRight: "100px" }}
        >
          <div style={{ display: "flex" }}>
            <h4 style={{ marginLeft: "50px" }}>Berita Lainnya</h4>
            <p className="garis"></p>
          </div>
        </div>
        <Container
          className="row align-items-center"
          style={{ marginLeft: "-270px" }}
        >
          <div className="col-lg-3">
            <CardBerita
              image={Berita1}
              isi="Dampak Perubah Iklim, Siklus Hujan Besar Semakin Cepat"
            />
          </div>
          <div className="col-lg-3">
            <CardBerita
              image={Berita2}
              isi="Liburan boleh asalkan jangan dirusak lingkungan sekitar"
            />
          </div>
          <div className="col-lg-3">
            <CardBerita
              image={Berita3}
              isi="Bagaimana potensi angin dapat tercipta?"
            />
          </div>
          <div className="col-lg-3">
            <CardBerita
              image={Berita4}
              isi="Potensi Ketersediaan Air Untuk Semua Orang"
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

export default Home;
