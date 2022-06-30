import React from "react";
import Logo from "../img/logo.svg";

const Header = () => {

  return (
    <header id="header" className="fixed-top">
      <div className="container">
        <div className="logo float-left">
          <a
            href="#/Home"
            className="scrollto"
          >
            <img src={Logo} alt="logo" width="150" className="img-fluid" />
          </a>
        </div>

        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li>
              <a href="#/Home">
                Home
              </a>
            </li>
            <li className="drop-down">
              <a>Enterprises</a>
              <ul>
                <li>
                  <a href="#/Services">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#/Products">
                    Products
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#/Technology">
                Technology
              </a>
            </li>
            <li className="drop-down">
              <a>Resourses </a>
              <ul>
                <li>
                  <a >Company Blog</a>
                </li>
                <li>
                  <a >Tech Blog</a>
                </li>
                <li>
                  <a >Research &amp; Reports </a>
                </li>
                <li>
                  <a >Case Study </a>
                </li>
              </ul>
            </li>
            <li className="drop-down">
              <a>Company</a>
              <ul>
                <li>
                  <a href="#/About">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#/Careers">
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#/NewsandMedia"
                  >
                    News And Media
                  </a>
                </li>
                <li>
                  <a href="#/Partners">
                    Partners
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#/Contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
