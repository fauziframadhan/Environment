import HOC from "../component/HOC";
import Bagaimana1 from "./../Img/Bagaimana1.png";
import Bagaimana2 from "./../Img/Bagaimana2.png";
import Bagaimana3 from "./../Img/Bagaimana3.png";
import Bagaimana4 from "./../Img/Bagaimana4.png";
import { Button } from "react-bootstrap";
import { HOME, PENGELOLAAN } from "../routes";
import Footer1 from "../component/Footer1";
import "./../style/Style.css";

const TigaR = () => {
  return (
    <HOC HeaderTitle="3R">
      <section className="activity" style={{ marginBottom: "30px" }}>
        <img src={Bagaimana1} alt="G2" />
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
              Pengelolaan Limbah -
            </a>
            <a>Jenis Sampah</a>
          </p>
          <h2 style={{ paddingBottom: "20px" }}>Bagaimana Daur Ulangnya?</h2>
          <p style={{ textAlign: "justify", width: "534px" }}>
            Tujuan dari daur ulang sampah adalah supaya sampah memiliki nilai
            ekonomi atau merubahnya menjadi bahan yang tidak membahayakan
            lingkungan. Dengan melakukan pengelolaan sampah rumah tangga yang
            benar, kamu dapat membantu untuk kejar mimpi menekan dampak negatif
            sampah terhadap lingkungan
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
          <h1 style={{ paddingTop: "50px" }}>Cara mengelola Sampahmu</h1>
        </div>
      </section>
      <section className="jenis-sampah-kedua">
        <img src={Bagaimana2} alt="Gambar1" />
        <div>
          <h2 style={{ marginLeft: "200px" }}>1.Reuse </h2>
          <p
            className="sampah"
            style={{ marginLeft: "200px", marginTop: "50px" }}
          >
            Merupakan cara mengelola sampah dengan menggunakannya kembali, baik
            secara langsung, untuk fungsi yang sama ataupun fungsi lain.
            Contohnya, kamu bisa kembali menggunakan kaleng bekas untuk
            dijadikan sebagai pot tanaman
          </p>
        </div>
      </section>
      <section className="jenis-sampah">
        <img src={Bagaimana3} alt="Gambar1" />
        <div>
          <h2 style={{ marginLeft: "100px", textAlign: "left" }}>2. Reduce</h2>
          <p
            className="sampah"
            style={{
              marginleft: "200px",
              marginTop: "50px",
              marginRight: "200px",
            }}
          >
            Pengelolaan dengan reduce adalah dengan mengurangi segala sesuatu
            yang menyebabkan timbulnya sampah. Contoh dalam pengelolaan ini
            adalah sangat berkaitan dengan kebiasaan sehari-hari kita. Kamu bisa
            memulainya dengan mengurangi penggunaan kantong plastik dan
            menggantikannya dengan tas belanja kain.
          </p>
        </div>
      </section>
      <section className="jenis-sampah-kedua" style={{ marginBottom: "100px" }}>
        <img src={Bagaimana4} alt="Gambar1" />
        <div>
          <h2 style={{ marginLeft: "200px" }}>3. Recycle</h2>
          <p
            className="sampah"
            style={{ marginLeft: "200px", marginTop: "50px" }}
          >
            Kamu bisa menjalani langkah pengelolaan sampah ini dengan
            memanfaatkan kembali sampah setelah sampah melalui proses
            pengolahan. Sebagai contoh dari memanfaatkannya kembali adalah
            mengolah logam untuk dijadikan kaleng atau sendok bekas. Langkah ini
            perlu menggunakan teknologi dan penanganan yang khusus.
          </p>
        </div>
      </section>
      <section>
        <Footer1 />
      </section>
    </HOC>
  );
};

export default TigaR;
