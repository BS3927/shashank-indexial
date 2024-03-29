import React from "react";
import Contacts from "../img/contacts.svg";

const Contact = () => {
  return (
    <>
      <section id="intro" class="clearfix">
        <div class="container">
          <div class="intro-img">
            <img src={Contacts} alt="Contact" class="img-fluid" />
          </div>

          <div class="intro-info">
            <h2>
              Get
              <br />
              <span>in touch</span>With us{" "}
            </h2>
            <div>
              <a
                href="https://wa.me/918624922118"
                class="btn-get-started scrollto"
              >
                Chat
              </a>
              <a href="tel:+91 8624922118" class="btn-services scrollto">
                call
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div class="container-fluid">
          <div class="section-header">
            <h3>Contact Us</h3>
          </div>

          <div class="row wow fadeInUp">
            <div class="col-lg-6">
              <div class="map mb-4 mb-lg-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15135.100713325586!2d73.8144199!3d18.4938401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc8e355b59317e99!2sIndexial%20Solutions!5e0!3m2!1sen!2sin!4v1657362169036!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>{" "}
              </div>
            </div>

            <div class="col-lg-6">
              <div class="row">
                <div class="col-md-5 info">
                  <i class="ion-ios-location-outline"></i>
                  <p>
                    <b> Our Office Location</b>
                    <br />
                    Office No.117,
                    <br />
                    The Business Hub,
                    <br />
                    Near Pruthvi Hotel,
                    <br />
                    Kothrud, Pune-38.
                  </p>
                </div>
                <div class="col-md-6 info">
                  <i class="ion-ios-telephone-outline"></i>
                  <p>
                    <b> Call us on</b>
                    <br />
                    91 2029997645
                    <br />
                    91 8624922118
                  </p>
                </div>
                <div class="col-md-4 info">
                  <i class="ion-ios-email-outline"></i>
                  <p>
                    {" "}
                    <b> Write us to </b>
                    <br /> For business inquires: info@indexial.in
                    <br />
                    For general queries: hello@indexial.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
