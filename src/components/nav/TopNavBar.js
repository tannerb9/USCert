import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./NavBars.css";

const TopNavBar = (props) => {
  return (
    <>
      <Navbar className="topnav">
        <Navbar.Brand href="#" className="brand">
          HealthStream Demo
        </Navbar.Brand>
        <Navbar.Text className="username">
          Tanner Brainard <RiArrowDropDownLine />
        </Navbar.Text>
      </Navbar>
    </>
  );
};

export default TopNavBar;
