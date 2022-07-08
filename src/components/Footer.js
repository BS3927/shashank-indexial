import React from "react";
import Logo2 from "../img/logo2.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 footer-info">
              <h3>
                <a href="#/Home" class="scrollto">
                  <img src={Logo2} alt="logo" width="150" class="img-fluid" />
                </a>
              </h3>
              <p>
                Partner actively with our customers to provide innovative and
                sustainable technical solutions to help them increase
                productivity, reduce cost and minimize risk.
              </p>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#/Home">Home</a>
                </li>
                <li>
                  <a href="#/About">About us</a>
                </li>
                <li>
                  <a href="#/Services">Services</a>
                </li>
                <li>
                  <a href="#/Products">Products</a>
                </li>
                <li>
                  <a href="#/Contact">Contact us</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="">Blogs</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/open?id=1ovR01Zam1dVl-rgWtFgtWWD5icHVRT4N"
                    target="_blank"
                  >
                    Terms of service{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/open?id=1laFkJEa_1TdqisCGlqNqnqn3DATx39Vz"
                    target="_blank"
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Office No.117, The Business Hub, Near Pruthvi Hotel, Kothrud,
                Pune-38. <br />
                <strong>Phone:</strong>
                <a> &#43; + 91-2029997645</a> <br />
                <strong>Email:</strong> info@indexial.in
                <br />
              </p>

              <div class="social-links">
                <a href="https://twitter.com/indexialsoluti1" class="twitter">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/Indexial/" class="facebook">
                  <i class="fa fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/indexialsolutions/"
                  class="instagram"
                >
                  <i class="fa fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/indexial-solutions"
                  class="linkedin"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong>Indexial</strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
