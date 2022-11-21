import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  ABOUT,
  ACTIVITIES,
  DONATE,
  HOME,
  LOGIN,
  MEDIA,
  REGISTER,
} from "../routes";
import Logo from "./../Img/Logo.png";

const Navs = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "green" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "65px", marginRight: "10px" }}
            />
            KALPATARU
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to={HOME} className="nav-link">
                Home
              </NavLink>
              <NavLink to={ABOUT} className="nav-link">
                About US
              </NavLink>
              <NavLink to={ACTIVITIES} className="nav-link">
                Wha We Do
              </NavLink>
              <NavLink to={DONATE} className="nav-link">
                Donate
              </NavLink>
              <NavLink to={MEDIA} className="nav-link">
                Media
              </NavLink>
              <NavLink to={LOGIN} className="nav-link">
                <Button
                  variant="outline-success"
                  style={{ marginRight: "10px" }}
                >
                  Login
                </Button>{" "}
              </NavLink>
              <NavLink to={REGISTER} className="nav-link">
                <Button variant="success">Sign UP</Button>{" "}
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navs;
