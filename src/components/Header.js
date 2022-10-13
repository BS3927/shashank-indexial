import React, { useEffect, useState } from "react";
import Logo from "../img/logo.svg";
import mobilemenubutton from "../img/mobilemenubutton.jpg";

const Header = () => {
  const [l, setL] = useState(1250);
  const [menuItom, setMenuItom] = useState("Home");
  const [isMobileView, setIsMobileView] = useState(
    document.body.offsetWidth <= 992 ? true : false
  );
  let timerId;

  window.addEventListener("resize", function () {
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      let deviceWidth = document.body.offsetWidth;
      if (deviceWidth <= 992) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    }, 500);
  });

  function f(e) {
    e.stopPropagation();
    if (e.target.nodeName == "UL") {
      return;
    }
    setMenuItom(e.target.innerText);
    setL(1250);
  }

  function fnMobileMenuClick() {
    setL(l == 750 ? 1250 : 750);
  }
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <header id="header" className="fixed-top">
      <div className="container">
        {isMobileView && (
          <img
            onClick={fnMobileMenuClick}
            src={mobilemenubutton}
            alt=""
            className="mobilebutton"
          />
        )}
        <div className={`logo ${isMobileView ? "float-right" : "float-left"}`}>
          <a href="/Home" className="scrollto">
            <img src={Logo} alt="logo" width="150" className="img-fluid" />
          </a>
        </div>

        <nav
          className={`${
            isMobileView ? "mobile-menu" : "main-nav"
          } float-right d-none d-lg-block`}
        >
          <ul>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <a href="/Home">Home</a>
            </li>
            <li className="drop-down">
              <a>Enterprises</a>
              <ul>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a href="/Services">Services</a>
                </li>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a href="/Products">Products</a>
                </li>
              </ul>
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <a href=" /Technology">Technology</a>
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
                  <a href=" /About">About Us</a>
                </li>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a href=" /Careers">Careers</a>
                </li>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a href=" /NewsandMedia">News And Media</a>
                </li>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <a href=" /Partners">Partners</a>
                </li>
              </ul>
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <a href=" /Contact">Contact Us</a>
            </li>
            {/* <img src={mobilemenubutton} alt="" className="mobilebutton" /> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
