import HOC from "../component/HOC";
import Donet from "./../Img/Donate.png";
import { Button } from "react-bootstrap";
import { HOME } from "../routes";
import { MDBInput } from "mdb-react-ui-kit";
import Footer1 from "../component/Footer1";

const Donate = () => {
  return (
    <HOC HeaderTitle="Donate">
      <section className="activity" style={{ marginBottom: "30px" }}>
        <img src={Donet} alt="G2" />
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
            Donasi
          </p>
          <h2 style={{ paddingBottom: "20px" }}>
            Berdonasi untuk Alam, Salurkan Donasi Anda Melalui Kalpataru
          </h2>
          <p style={{ textAlign: "justify", width: "534px" }}>
            Saat Anda menyumbang, Anda mendukung solusi efektif untuk tantangan
            lingkungan yang besar—investasi untuk masa depan planet kita.
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
            Donasi Sekarang
          </Button>
          <br />
          <br />
        </div>
      </section>
      <section className="jumbotron2">
        <div style={{ height: "169px", color: "#EFF7F2", textAlign: "center" }}>
          <h1 style={{ paddingTop: "50px" }}>
            Silakan Lengkapi Data Donasi Anda
          </h1>
        </div>
      </section>
      <section className="berita">
        <div
          className="col-12 text-start my-5"
          style={{ marginRight: "100px" }}
        >
          <div style={{ display: "flex", marginTop: "-100px" }}>
            <h4 style={{ marginLeft: "50px" }}>Halaman Donasi</h4>
            <p className="garis"></p>
          </div>
          <p
            style={{
              marginLeft: "50px",
              marginTop: "10px",
              marginBottom: "70px",
            }}
          >
            Berapapun donasi yang anda salurkan, akan sangat berarti bagi
            lingkungan.{" "}
          </p>
          <div
            className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4"
            style={{ marginTop: "-50px" }}
          >
            <label style={{ marginLeft: "50px" }}>Nama</label>
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              id="formControlLg"
              type="text"
              size="lg"
            />
            <label style={{ marginLeft: "50px" }}>Email</label>
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              id="formControlLg"
              type="email"
              size="lg"
            />
            <label style={{ marginLeft: "50px" }}>Jumlah Donasi</label>
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              id="formControlLg"
              type="number"
              size="lg"
            />
            <label style={{ marginLeft: "50px" }}>Pilih Rekening Tujuan</label>
            <select
              className=""
              style={{
                marginLeft: "50px",
                width: "1025px",
                height: "50px",
                border: "groove",
                borderRadius: "5px",
              }}
            >
              <option value="Mandiri">Mandiri-122376880935</option>
              <option value="BRI">BRI-189022837748</option>
              <option value="BNI">BNI-220100772536</option>
              <option value="BCI">BCA-092635478012</option>
            </select>
            <Button
              variant="success"
              style={{
                width: "146px",
                background: "#18A637",
                marginLeft: "50px",
                padding: "10px",
                borderRadius: "8px",
                fontSize: "16px",
                marginTop: "50px",
                marginBottom: "80px",
              }}
            >
              Kirim Donasi
            </Button>{" "}
          </div>
        </div>
      </section>
      <section>
        <Footer1 />
      </section>
    </HOC>
  );
};

export default Donate;
