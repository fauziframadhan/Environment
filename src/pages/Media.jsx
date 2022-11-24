import HOC from "../component/HOC";
import { HOME } from "../routes";
import Article from "./../Img/article.png";
import Article1 from "./../Img/article1.png";
import Article2 from "./../Img/article2.png";
import Article3 from "./../Img/article3.png";
import Wt from "./../Img/writter.png";
import { Button, Container, Card } from "react-bootstrap";
import Footer1 from "../component/Footer1";

const Media = () => {
  return (
    <HOC HeaderTitle="Media">
      <section className="activity" style={{ marginBottom: "30px" }}>
        <div className="col-4" style={{ marginLeft: "-70px" }}>
          <input
            type="search"
            placeholder="Cari Berita"
            style={{
              width: "300px",
              borderRadius: "20px",
              paddingLeft: "10px",
              color: "grey",
              marginTop: "35px",
            }}
          />
          <br />
          <div>
            <Container className="" style={{ justifyContent: "" }}>
              <img src={Wt} alt="Wt" style={{ marginTop: "50px" }} />
              <div
                className="col-8"
                style={{
                  textAlign: "justify",
                  marginLeft: "70px",
                  marginBottom: "70px",
                  marginTop: "-60px",
                }}
              >
                <p>Ardhito Ramadhan</p>
                <p style={{ color: "grey" }}>173 Followers</p>
                <br />

                <Button
                  variant="success"
                  style={{
                    width: "130px",
                    height: "50px",
                    background: "#18A637",
                    padding: "10px",
                    borderRadius: "40px",
                    fontSize: "16px",
                    textAlign: "center",
                    marginLeft: "-70px",
                    marginTop: "-20px",
                  }}
                >
                  Follow
                </Button>
              </div>
              <div>
                <h4>Artikel Lainnya</h4>
                <Card
                  className="kedua"
                  style={{
                    width: "386px",
                    justifyContent: "",
                    marginLeft: "0px",
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={Article1}
                    alt="Artikel1"
                    style={{
                      width: "65px",
                      height: "65px",
                      marginLeft: "15px",
                      marginTop: "15px",
                    }}
                  />
                  <div
                    className="col-8"
                    style={{
                      textAlign: "justify",
                      marginLeft: "100px",
                      marginTop: "-70px",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>
                      Liburan boleh asalkan jangan dirusak lingkungan sekitar
                    </p>
                    <p style={{ fontSize: "10px", color: "grey" }}>
                      1 jam yang lalu
                    </p>
                  </div>
                </Card>
                <Card
                  className="kedua"
                  style={{
                    width: "386px",
                    justifyContent: "",
                    marginLeft: "0px",
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={Article2}
                    alt="Artikel2"
                    style={{
                      width: "65px",
                      height: "65px",
                      marginLeft: "15px",
                      marginTop: "15px",
                    }}
                  />
                  <div
                    className="col-8"
                    style={{
                      textAlign: "justify",
                      marginLeft: "100px",
                      marginTop: "-70px",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>
                      Bagaimana potensi angin dapat tercipta?
                    </p>
                    <p style={{ fontSize: "10px", color: "grey" }}>
                      12 jam yang lalu
                    </p>
                  </div>
                </Card>
                <Card
                  className="kedua"
                  style={{
                    width: "386px",
                    justifyContent: "",
                    marginLeft: "0px",
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={Article3}
                    alt="Artikel3"
                    style={{
                      width: "65px",
                      height: "65px",
                      marginLeft: "15px",
                      marginTop: "15px",
                    }}
                  />
                  <div
                    className="col-8"
                    style={{
                      textAlign: "justify",
                      marginLeft: "100px",
                      marginTop: "-70px",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>
                      Potensi Ketersediaan Air Untuk Semua Orang
                    </p>
                    <p style={{ fontSize: "10px", color: "grey" }}>
                      19 jam yang lalu
                    </p>
                  </div>
                </Card>
              </div>
            </Container>
          </div>
        </div>
        <div
          className="col-8 "
          style={{ marginLeft: "100px", marginBottom: "100px" }}
        >
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
            - Artikel
          </p>
          <h2 style={{ paddingBottom: "20px" }}>
            Dampak Perubah Iklim, Siklus Hujan Besar Semakin Cepat
          </h2>
          <img src={Article} alt="G1" style={{ marginBottom: "20px" }} />
          <br />
          <p>Arditho Ramadhan</p>
          <p style={{ fontSize: "10px" }}>
            Kompas.com - 01 Maret 2020, 16:39 WIB
          </p>
          <br />
          <p style={{ textAlign: "justify", width: "846px" }}>
            JAKARTA, KOMPAS.com - Kepala Badan Meteorologi, Klimatologi, dan
            Geofisika (BMKG) Dwikorita Karnawati menyebutkan, siklus hujan
            berintensitas ekstrem kini berubah menjadi lebih cepat.
            <br />
            <br /> Dwikorita mengatakan, siklus hujan dapat datang dua kali
            lebih cepat dari biasanya itu merupakan salah satu dampak dari
            perubahan iklim.
            <br />
            <br />
            "Hujan intensitas esktrem itu ada siklusnya, tapi tampaknya siklus
            itu semakin memendek, yang biasanya 10 tahunan, 20 tahunan menjadi
            datang hanya dalam waktu lima tahun atau kurang," kata Dwikorita di
            Kantor BPPT, Jumat (3/1/2020).
            <br />
            <br /> Dwikorita melanjutkan, perubahan iklim juga berpengaruh pada
            peningkatan suhu udara. Menurut Diwkorita, suhu udara di Indonesia
            pada 30 tahun terakhir naik 0,1 hingga 1 derajat Celcius. "Memang
            kelihatan kecil, tapi dampaknya itu bisa parah. Dan dunia itu
            membatasi sampai 2030 perubhaan suhu tidak lebih dari 1,5 celcius.
            <br />
            <br /> Sementara itu 2020 ini udah hampir 1 Celsius," ujar
            Dwikorita. Kepala Badan Nasional Penanggulangan Bencana (BNPB) Doni
            Monardo menambahkan, fenomena tersebut diperparah dengan perubahan
            fungsi lahan misalnya kawasan hutan yang berubah menjadi kawasan
            pertanian, perkebunan, hingga pertambangan.
            <br />
            <br />
            Oleh sebab itu, ia meminta pemerintah dan pengusaha untuk
            memperhatikan keseimbangan alam dalam menjalankan kegiatan usahanya.
            "Jangan sampai kita dapat keuntungan ekonomi besar tapi kerugian
            jiwanya juga besar," kata Doni.
            <br />
            <br /> Diberitakan sebelumnya, hujan yang mengguyur sejak Selasa
            (31/12/2019) hingga Rabu (1/1/2020) itu telah mengakibatkan banjir
            di sejumlah wilayah di Jabodetabek.
            <br /> <br />
            Hingga Jumat pagi ini, BNPB mencatat terdapat 35 korban tewas akibat
            banjir di Jabodetabek tersebut. <br />
            <br />
            Peristiwa ini kemudian menimbulkan pertanyaan karena siklus hujan
            besar di Jabodetabek biasanya berlangsung selama lima tahun sekali.
          </p>
        </div>
      </section>
      <section>
        <Footer1 />
      </section>
    </HOC>
  );
};

export default Media;
