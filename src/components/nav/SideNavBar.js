import React from "react";
import { Nav } from "react-bootstrap";
import { MdFormatListBulleted } from "react-icons/md";
import "./NavBars.css";

function SideNavBar() {
  return (
    <>
      <Nav className="sidenav">
        <Nav.Link className="nav-link" href="#certslist" active>
          <MdFormatListBulleted /> Certifications
        </Nav.Link>
      </Nav>
    </>
  );
}

export default SideNavBar;
