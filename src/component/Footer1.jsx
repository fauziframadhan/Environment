import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import LogoFooter from "./../Img/Logo2.png";
import Hubungi from "./../Img/Hubungi.png";
import GG from "./../Img/Gmail.png";
import IG from "./../Img/IG.png";
import FB from "./../Img/FB.png";
import LN from "./../Img/LN.png";
import MS from "./../Img/MS.png";

const Footer1 = () => {
  return (
    <MDBFooter
      style={{ background: "#1E5A2B" }}
      className="text-center text-lg-start text-muted"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-1 border-bottom">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img src={LogoFooter} />
                <br />
                <br />
                <p style={{ marginLeft: "40px", color: "#FFFFFF" }}>
                  KALPATARU
                </p>
                <br />
                <div>
                  <a href="" className="me-4 text-reset">
                    <img src={IG} />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <img src={FB} />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <img src={LN} />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <img src={MS} />
                  </a>
                </div>
              </h6>
            </MDBCol>

            <MDBCol
              md="2"
              lg="2"
              xl="2"
              className="mx-auto mb-4"
              style={{ color: "#FFFFFF" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Halaman</h6>
              <p>
                <a href="#!" className="text-reset">
                  Tentang Kami
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Kontak
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="3"
              lg="2"
              xl="2"
              className="mx-auto mb-4"
              style={{ color: "#FFFFFF" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Lainnya</h6>
              <p>
                <a href="#!" className="text-reset">
                  Donasi
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Event
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-md-0 mb-4"
              style={{ color: "#FFFFFF" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Kontak Kami</h6>
              {/* <p>
                <MDBIcon icon="home" className="me-2" />
                <input
                  type={"email"}
                  placeholder="Cari disini"
                  style={{ textAlign: "center" }}
                />
              </p> */}
              <p>
                <MDBIcon icon="envelope" className="me-1" />
                kalpataru2022@gmail.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "#FFFFFF" }}
      >
        © 2022 Kalpataru
      </div>
    </MDBFooter>
  );
};

export default Footer1;
