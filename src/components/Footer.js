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
                <a href="index.html" class="scrollto">
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
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About us</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="products.html">Products</a>
                </li>
                <li>
                  <a href="contact.html">Contact us</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="Under_Maintenance.html">Blogs</a>
                </li>
                <li>
                  <a href="newsandmedia.html">News</a>
                </li>
                <li>
                  <a href="Under_Maintenance.html">Support</a>
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
                1st Floor, Opps. Of Andhra Bank, Sahawas Road, Karve Nagar,
                Pune-52. <br />
                <strong>Phone:</strong>
                <a> &#43; 91-2025422118</a> <br />
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
