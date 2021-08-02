import React from "react";
import { Nav } from "react-bootstrap";
import "./NavBars.css";

function SideBar() {
  return (
    <>
      <Nav className="sidenav">
        <Nav.Link className="nav-link" href="#certslist">
          Certifications
        </Nav.Link>
      </Nav>
    </>
  );
}

export default SideBar;
