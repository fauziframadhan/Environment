import React from "react";
import { Container, Row } from "react-bootstrap";
import LogoFooter from "./../Img/Logo2.png";
import LogoGmail from "./../Img/Gmail.png";
import "./../style/Style.css";

const Footer = () => {
  return (
    <footer style={{ background: "#1E5A2B" }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={LogoFooter} />
            <p className="brand-tagline font weight-light">KALPATARU</p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Halaman</h6>
            <ul>
              <li>Tentang Kami</li>
              <li>Kontak</li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Lainnya</h6>
            <ul>
              <li>Donasi</li>
              <li>Event</li>
            </ul>
          </div>
          <div className="col-4 mr-5">
            <h6 className="mt-2">Kontak Kami</h6>
            <ul className="list-group list-group-flush">
              <li>
                <img src={LogoGmail} style={{ width: "20px" }} />
              </li>
            </ul>
          </div>
        </div>
        <hr style={{}} />
        <div className="row">
          <div className="col text-center copyrights">@ 2022 KALPATARU</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
