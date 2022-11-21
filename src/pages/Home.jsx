import HOC from "../component/HOC";
import Bg from "./../Img/bghome.png";
import Bg1 from "./../Img/gambar1.png";
import Logo1 from "./../Img/earth.png";
import Logo2 from "./../Img/arrow.png";

import "./../style/Style.css";
import { Button } from "react-bootstrap";
import AboutUs from "./AboutUs";
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
        <div className="card text-center row justify-content-center">
          <div className="card-body">
            Ayo mulai selamatkan lingkungan, mulai dari diri anda!
            <Button
              variant="success"
              style={{
                width: "154px",
                background: "#18A637",
                marginLeft: "50px",
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
    </HOC>
  );
};

export default Home;
