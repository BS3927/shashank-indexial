import React, { useEffect } from "react";
import Logo from "../img/logo.svg";

const Header = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <header id="header" className="fixed-top">
      <div className="container">
        <div className="logo float-left">
          <a href="#/Home" className="scrollto">
            <img src={Logo} alt="logo" width="150" className="img-fluid" />
          </a>
        </div>

        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <a href="#/Home">Home</a>
            </li>
            <li className="drop-down">
              <a>Enterprises</a>
              <ul>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a href="#/Services">Services</a>
                </li>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a href="#/Products">Products</a>
                </li>
              </ul>
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <a href="#/Technology">Technology</a>
            </li>
            <li className="drop-down">
              <a>Resourses </a>
              <ul>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a>Company Blog</a>
                </li>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a>Tech Blog</a>
                </li>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a>Research &amp; Reports </a>
                </li>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a>Case Study </a>
                </li>
              </ul>
            </li>
            <li className="drop-down">
              <a>Company</a>
              <ul>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a href="#/About">About Us</a>
                </li>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a href="#/Careers">Careers</a>
                </li>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a href="#/NewsandMedia">News And Media</a>
                </li>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a href="#/Partners">Partners</a>
                </li>
              </ul>
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <a href="#/Contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
