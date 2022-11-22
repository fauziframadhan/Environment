import { Carousel, Container, Button } from "react-bootstrap";
import Botol1 from "./../Img/botol.png";
import Botol2 from "./../Img/botol2.png";
import Botol3 from "./../Img/botol3.png";
import "./../style/Style.css";

const Slider = () => {
  return (
    <Container
      style={{
        background: "#FFFFFF",
        color: "#000000",
        width: "1120px",
        height: "300px",
        borderRadius: "20px",
      }}
    >
      <Carousel fade>
        <Carousel.Item>
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
              }}
            />
            <div className="col-8">
              <h4 className="isislider">
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
              }}
            />
            <div className="col-8">
              <h4 className="isislider">Gerakan Menanam Pohon</h4>
              <br />
              <p>
                Mengajak semua orang untuk melakukan penghijauan dengan kegiatan
                interaktif, kontribusi anda dalam kegiatan ini akan
                didistribusikan dengan penanaman satu pohon. Kontribusi anda
                dalam kegiatan ini akan didistribusikan dengan penanaman satu
                pohon.
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
              }}
            />
            <div className="col-8">
              <h4 className="isislider">Temukan TPS Terdekat di Kotamu</h4>
              <br />
              <p>
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
                }}
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
