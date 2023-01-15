import HOC from "../component/HOC";
import Apa1 from "./../Img/Apa sampahmu1.png";
import Apa2 from "./../Img/Apa sampahmu2.png";
import Apa3 from "./../Img/Apa sampahmu3.png";
import Apa4 from "./../Img/Apa sampahmu4.png";
import { Button } from "react-bootstrap";
import { HOME, PENGELOLAAN } from "../routes";
import Footer1 from "../component/Footer1";
import "./../style/Style.css";

const Apa = () => {
  return (
    <HOC HeaderTitle="Jenis Sampah">
      <section className="activity" style={{ marginBottom: "30px" }}>
        <img src={Apa1} alt="G2" />
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
              Pengelolaan Limbah
            </a>
            - Jenis Sampah
          </p>
          <h2 style={{ paddingBottom: "20px" }}>Apa Sampahmu</h2>
          <p style={{ textAlign: "justify", width: "534px" }}>
            Kurangnya edukasi mengenai cara mengelola sampah juga membuat
            masyarakat lebih banyak membakar sampah rumah tangga yang berbahaya
            bagi kesehatan. Melansir dari Hallosehat.com, sampah yang dibakar
            akan menghasilkan bahan kimia, yang akan memuai ke udara serta
            memicu polusi. Karbon monoksida dan formaldehida (formalin) adalah
            dua zat utama hasil pembakaran yang paling banyak memicu penyakit
            pernapasan.
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
          <h1 style={{ paddingTop: "50px" }}>Jenis-jenis Sampah</h1>
        </div>
      </section>
      <section className="jenis-sampah-kedua">
        <img src={Apa2} alt="Gambar1" />
        <div>
          <h2 style={{ marginLeft: "200px" }}>1. Sampah Organik</h2>
          <p
            className="sampah"
            style={{ marginLeft: "200px", marginTop: "50px" }}
          >
            Jenis Sampah yang diproduksi dari bahan - bahan hayati. Sifatnya
            dapat didegradasi oleh mikroba. Proses terurainya sangat mudah.
            Contoh dari sampah organik sendiri adalah sampah rumah tangga,
            seperti sisa makanan, tepung, kulit buah, daun dan ranting. Selain
            rumah tangga, pasar tradisional juga menjadi penyumbang terbesar
            dalam menghasilkan jenis sampah organik ini.
          </p>
        </div>
      </section>
      <section className="jenis-sampah">
        <img src={Apa3} alt="Gambar1" />
        <div>
          <h2 style={{ marginLeft: "0px", textAlign: "left" }}>
            2. Sampah Non-Organik
          </h2>
          <p
            className="sampah"
            style={{
              marginleft: "200px",
              marginTop: "50px",
              marginRight: "200px",
            }}
          >
            Sampah Non-Organik merupakan kebalikan dari sampah Organik. Sampah
            ini dihasilkan dari bahan - bahan non hayati, bisa berupa produk
            sintetik,dll. Sampah organik dibedakan lagi menjadi sampah logam dan
            produk olahannya, sampah plastik, kertas, kaca, keramik dan
            deterjen. Jenis sampah ini sebagian besar tidak dapat diurai secara
            keseluruhan melalui cara alami. Contoh sampah ini adalah, sampah
            botol plastik, botol gelas, tas plastik dan kaleng
          </p>
        </div>
      </section>
      <section className="jenis-sampah-kedua" style={{ marginBottom: "100px" }}>
        <img src={Apa4} alt="Gambar1" />
        <div>
          <h2 style={{ marginLeft: "200px" }}>3. Sampah B3</h2>
          <p
            className="sampah"
            style={{ marginLeft: "200px", marginTop: "50px" }}
          >
            Jenis sampah ini merupakan sampah yang diproduksi dari pengolahan
            yang berbahaya. Sumber sampah B3 ini berasal dari sumber yang tidak
            spesifik seperti dari hasil mencuci, sumber spesifik seperti limbah
            yang berasal dari proses industri, dan sumber lainnya.
          </p>
        </div>
      </section>
      <section>
        <Footer1 />
      </section>
    </HOC>
  );
};

export default Apa;
