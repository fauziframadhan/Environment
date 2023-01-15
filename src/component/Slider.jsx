import { Carousel, Container, Button } from "react-bootstrap";
import { KIRIM, KLAIM, PENGELOLAAN, POHON, TPS, VOLUNTEER } from "../routes";
import Botol1 from "./../Img/botol.png";
import Botol2 from "./../Img/botol2.png";
import Botol3 from "./../Img/botol3.png";
import Botol4 from "./../Img/botol4.png";
import Botol5 from "./../Img/botol5.png";
import "./../style/Style.css";

const Slider = () => {
  return (
    <Container
      style={{
        background: "#FFFFFF",
        color: "#00000",
        width: "1120px",
        height: "300px",
        borderRadius: "20px",
      }}
    >
      <Carousel fade variant="dark">
        <Carousel.Item interval={1000}>
          <Container className="kedua">
            <img
              src={Botol1}
              alt="First slide"
              style={{
                width: "200px",
                height: "200px",
                paddingTop: "20px",
                paddingLeft: "20px",
                marginTop: "-55px",
                marginLeft: "50px",
              }}
            />
            <div className="col-8">
              <h4 className="isislider">
                Gerakan Pengelolaan Limbah dengan 3R
              </h4>
              <br />
              <p
                style={{
                  textAlign: "justify",
                  marginRight: "100px",
                }}
              >
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
                  marginBottom: "50px",
                }}
                href={PENGELOLAAN}
              >
                Lihat Selengkapnya
              </Button>{" "}
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className="kedua">
            <img
              src={Botol2}
              alt="First slide"
              style={{
                width: "200px",
                height: "200px",
                paddingTop: "20px",
                paddingLeft: "20px",
                marginTop: "-55px",
                marginLeft: "50px",
                marginBottom: "100px",
              }}
            />
            <div className="col-8">
              <h4 className="isislider">Gerakan Menanam Pohon</h4>
              <br />
              <p
                style={{
                  textAlign: "justify",
                  marginRight: "100px",
                  marginBottom: "10px",
                }}
              >
                Mengajak semua orang untuk melakukan penghijauan dengan kegiatan
                interaktif, kontribusi anda dalam kegiatan ini akan
                didistribusikan dengan penanaman satu pohon.
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
                  marginBottom: "10px",
                }}
                href={POHON}
              >
                Lihat Selengkapnya
              </Button>{" "}
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className="kedua">
            <img
              src={Botol3}
              alt="First slide"
              style={{
                width: "200px",
                height: "200px",
                paddingTop: "20px",
                paddingLeft: "20px",
                marginTop: "-55px",
                marginLeft: "50px",
              }}
            />
            <div className="col-8">
              <h4 className="isislider">Temukan TPS Terdekat di Kotamu</h4>
              <br />
              <p
                style={{
                  textAlign: "justify",
                  marginRight: "100px",
                }}
              >
                Anda bisa menemukan Tempat Pembuangan Sampah terdekat, pada
                halaman ini anda dapat mengakses data yang berisi lokasi TPS
                terdekat di kota anda.Anda dapat berkontribusi dengan kami
                secara langsung.
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
                  marginBottom: "50px",
                }}
                href={TPS}
              >
                Lihat Selengkapnya
              </Button>{" "}
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className="kedua">
            <img
              src={Botol4}
              alt="First slide"
              style={{
                width: "200px",
                height: "200px",
                paddingTop: "20px",
                paddingLeft: "20px",
                marginTop: "-55px",
                marginLeft: "50px",
              }}
            />
            <div className="col-8">
              <h4 className="isislider">Ayo join sebagai Volunteer</h4>
              <br />
              <p
                style={{
                  textAlign: "justify",
                  marginRight: "100px",
                }}
              >
                Anda bisa menemukan kegiatan yang akan berlangsung dan
                membutuhkan sukarelawan untuk membantu kelancaran dari kegiatan
                Pelestarian Lingkungan.
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
                  marginBottom: "50px",
                }}
                href={VOLUNTEER}
              >
                Lihat Selengkapnya
              </Button>
              {""}
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className="kedua">
            <img
              src={Botol5}
              alt="First slide"
              style={{
                width: "200px",
                height: "200px",
                paddingTop: "20px",
                paddingLeft: "20px",
                marginTop: "-55px",
                marginLeft: "50px",
              }}
            />
            <div className="col-8">
              <h4 className="isislider">Kirim Sampahmu</h4>
              <br />
              <p
                style={{
                  textAlign: "justify",
                  marginRight: "100px",
                }}
              >
                Mengajak Semua orang untuk mengirimkan sampahnya agar bisa
                mendapat point untuk dapat ditukarkan menjadi barang
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
                  marginBottom: "50px",
                }}
                href={KIRIM}
              >
                Lihat Selengkapnya
              </Button>{" "}
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className="kedua">
            <img
              src={Botol5}
              alt="First slide"
              style={{
                width: "200px",
                height: "200px",
                paddingTop: "20px",
                paddingLeft: "20px",
                marginTop: "-55px",
                marginLeft: "50px",
              }}
            />
            <div className="col-8">
              <h4 className="isislider">Klaim Reward</h4>
              <br />
              <p
                style={{
                  textAlign: "justify",
                  marginRight: "100px",
                }}
              >
                Tukarkan point yang telah kamu kumpulkan ke barang-barang yang
                menarik dan berguna untuk mendukung pelestarian lingkungan
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
                  marginBottom: "50px",
                }}
                href={KLAIM}
              >
                Lihat Selengkapnya
              </Button>{" "}
            </div>
          </Container>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;
