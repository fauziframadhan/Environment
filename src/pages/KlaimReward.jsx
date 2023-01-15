import HOC from "../component/HOC";
import Perjalanan1 from "./../Img/Perjalanan1.png";
import Perjalanan2 from "./../Img/Perjalanan2.png";
import Perjalanan3 from "./../Img/Perjalanan3.png";
import Perjalanan4 from "./../Img/Perjalanan4.png";
import { Button } from "react-bootstrap";
import { HOME, PENGELOLAAN } from "../routes";
import Footer1 from "../component/Footer1";
import "./../style/Style.css";

const KlaimReward = () => {
  return (
    <HOC HeaderTitle="Klaim Reward">
      <section className="activity" style={{ marginBottom: "30px" }}>
        <img src={Perjalanan1} alt="G2" />
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
            <a
              class="text-muted"
              href={PENGELOLAAN}
              style={{ textUnderlinePosition: "none" }}
            >
              Klaim Reward
            </a>
            - Jenis Sampah
          </p>
          <h2 style={{ paddingBottom: "20px" }}>
            Segera tukarkan poinmu sekarang juga!
          </h2>
          <p style={{ textAlign: "justify", width: "534px" }}>
            Kumpulkan poin sebanyak mungkin dan segera tukarkan reward poin anda
            dengan berbagai hal bermanfaat! Mulai dari menanam pohon, berdonasi,
            dan reward menarik lainnya!
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
            Tukarkan Sekarang
          </Button>
          <Button
            variant="success"
            style={{
              width: "222px",
              height: "48px",
              background: "white",
              padding: "10px",
              borderRadius: "8px",
              fontSize: "16px",
              textAlign: "center",
              color: "#18A637",
            }}
          >
            Pelajari Selengkapnya
          </Button>
          <br />
          <br />
        </div>
      </section>
      <section className="jumbotron2" id="Next">
        <div style={{ height: "169px", color: "#EFF7F2", textAlign: "center" }}>
          <h1 style={{ paddingTop: "50px" }}>Bagaimana Caranya?</h1>
        </div>
      </section>
      <section className="jenis-sampah-kedua">
        <img src={Perjalanan2} alt="Gambar1" />
        <div>
          <h2 style={{ marginLeft: "200px" }}>
            Pilih reward yang anda inginkan
          </h2>
          <p
            className="sampah"
            style={{ marginLeft: "200px", marginTop: "50px" }}
          >
            Pastikan poin yang ada miliki mencukupi reward yang anda pilih,
            silakan pilih reward yang menarik bagi anda
          </p>
        </div>
      </section>
      <section className="jenis-sampah">
        <img src={Perjalanan3} alt="Gambar1" />
        <div>
          <h2 style={{ marginLeft: "0px", textAlign: "left" }}>
            Lengkapi data Produk yang dipilih
          </h2>
          <p
            className="sampah"
            style={{
              marginleft: "200px",
              marginTop: "50px",
              marginRight: "200px",
            }}
          >
            Buat transaksi pengiriman sampah anda sebelum melakukan pengiriman
            sampah kepada mitra kami
          </p>
        </div>
      </section>
      <section className="jenis-sampah-kedua" style={{ marginBottom: "100px" }}>
        <img src={Perjalanan4} alt="Gambar1" />
        <div>
          <h2 style={{ marginLeft: "200px" }}>Tunggu Reward anda sampai</h2>
          <p
            className="sampah"
            style={{ marginLeft: "200px", marginTop: "50px" }}
          >
            Setorkan sampah yang sudah anda kemas sebelumnya kepada ekspedisi
            yang telah ditetapkan saat melakukan transaksi.
          </p>
        </div>
      </section>
      <section>
        <Footer1 />
      </section>
    </HOC>
  );
};

export default KlaimReward;
