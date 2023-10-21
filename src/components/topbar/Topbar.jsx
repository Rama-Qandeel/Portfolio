import React from "react";
import { Person, Mail } from "@material-ui/icons";
import "./topbar.scss";
import Menu from "../menu/Menu";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  console.log(menuOpen);
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="char">
            <span>R</span>
          </div>
          <a href="#intro" className="logo">
            Rama
          </a>
        </div>
        <ul className="menu-header">
          <li>
            <a href="#intro">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#intro">Services</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#bloogs">Blogs</a>
          </li>
        </ul>
        <div className="btn">
          <a href="contact" className="btn">
            Contact Us
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
