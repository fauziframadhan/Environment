import HOC from "../component/HOC";
import Pengelolaan1 from "./../Img/Pengelolaan.png";
import { Button } from "react-bootstrap";
import { HOME } from "../routes";
import Bagaimana2 from "./../Img/Bagaimana2.png";
import Bagaimana3 from "./../Img/Bagaimana3.png";
import Bagaimana4 from "./../Img/Bagaimana4.png";
import Footer1 from "../component/Footer1";
import "./../style/Style.css";

const KirimSampah = () => {
  return (
    <HOC HeaderTitle="Kirim Sampah">
      <section
        className="activity"
        style={{ marginBottom: "30px" }}
        id="Kirim Sampah"
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
            Kirim Sampah
          </p>
          <h2 style={{ paddingBottom: "20px" }}>
            Buat gerakan nyatamu sekarang bersama kalpataru!
          </h2>
          <p style={{ textAlign: "justify", width: "534px" }}>
            Ayo lakukan Challenge pertama kamu! Packing sampah yang kamu miliki
            dan kirim ke mitra kami. Kumpulkan poinmu sebanyak mungkin dengan
            mengirimkan sampah kepada mitra kami, poin yang terkumpul dapat
            digunakan sebagai hal bermanfaat dan ditukarkan dengan merchandise
            menarik!
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
      <section className="jenis-sampah-kedua">
        <img src={Bagaimana2} alt="Gambar1" />
        <div>
          <h2 style={{ marginLeft: "100px" }}>
            Pilih dan Kemas Sampah yang akan dikirim{" "}
          </h2>
          <p
            className="sampah"
            style={{ marginLeft: "100px", marginTop: "50px" }}
          >
            Pastikan sampah yang akan anda kirim dalam keadaan bersih dan tidak
            dalam keadaan basah. Kemaslah sampah anda sesuai dengan standar
            pengemasan yang telah ditetapkan oleh ekspedisi.
          </p>
        </div>
      </section>
      <section className="jenis-sampah">
        <img src={Bagaimana3} alt="Gambar1" />
        <div style={{ marginBottom: "100px" }}>
          <h2 style={{ marginLeft: "100px", textAlign: "left" }}>
            Lakukan Transaksi Pengiriman Sampah
          </h2>
          <p
            className="sampah"
            style={{
              marginLeft: "100px",
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
        <img src={Bagaimana4} alt="Gambar1" />
        <div>
          <h2 style={{ marginLeft: "200px" }}>
            Kirimkan Sampah Anda kepada Mitra Kami
          </h2>
          <p
            className="sampah"
            style={{ marginLeft: "200px", marginTop: "50px" }}
          >
            Setorkan sampah yang sudah anda kemas sebelumnya kepada ekspedisi
            yang telah ditetapkan saat melakukan transaksi.
          </p>
        </div>
      </section>
      <section className="jenis-sampah">
        <img src={Bagaimana2} alt="Gambar1" />
        <div style={{ marginBottom: "100px" }}>
          <h2 style={{ marginLeft: "100px", textAlign: "left" }}>
            Dapatkan Reward berupa Poin
          </h2>
          <p
            className="sampah"
            style={{
              marginLeft: "100px",
              marginTop: "50px",
              marginRight: "200px",
            }}
          >
            Anda akan mendapatkan reward berupa poin setelah sampah anda sampai
            kepada kami, poin yang anda miliki dapat ditukarkan dengan hal - hal
            bermanfaat dan reward merchandise menarik lainnya
          </p>
        </div>
      </section>
      <section className="jumbotron2" id="Next">
        <div style={{ height: "169px", color: "#EFF7F2", textAlign: "center" }}>
          <h1 style={{ paddingTop: "50px" }}>Nilai Konversi Sampah ke Poin</h1>
        </div>
      </section>
      <h1 style={{ textAlign: "center" }}> Under constraction</h1>
      <section>
        <section style={{ marginBottom: "100px" }}></section>
        <Footer1 />
      </section>
    </HOC>
  );
};

export default KirimSampah;
