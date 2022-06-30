import React from "react";
import AboutImg from "../img/about.svg";
import AboutUs from "../img/aboutus.svg";
import AboutUs2 from "../img/aboutus2.svg";
import Movie from "../img/movie.gif";
import testimonial1 from "../img/testimonial-1.jpg";
import testimonial2 from "../img/testimonial-2.jpg";
import Client1 from "../img/clients/client-1.png";
import Client2 from "../img/clients/client-2.png";
import Client3 from "../img/clients/client-3.png";
import Client4 from "../img/clients/client-4.png";
import Client5 from "../img/clients/client-5.png";
import Client6 from "../img/clients/client-6.png";
import Client7 from "../img/clients/client-7.png";
import Client8 from "../img/clients/client-8.png";

const About = () => {
  return (
    <>
      {/* Intro Section */}
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img src={AboutImg} alt="About Company" className="img-fluid" />
          </div>
          <div className="intro-info">
            <h2>
              Passion of creating Mansion of <br />
              <span>technologies</span> in your minds.
            </h2>
            <div>
              <a
                href="Under_Maintenance.html"
                className="btn-services scrollto"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* #intro  */}

      <main id="main">
        {/* About Us Section */}
        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3>Our Company</h3>
              <p>
                One of the fastest growing company in consulting, technology
                services and digital transformation, indexial is at the
                forefront of innovation to address the entire breadth of
                clients’ opportunities in the evolving world of cloud, digital
                and platforms.
              </p>
            </header>

            <div className="row about-extra">
              <div className="col-lg-6 wow fadeInUp">
                <img src={AboutUs} className="img-fluid" alt=" About Company" />
              </div>
              <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                <h4>Prepare for the future of work.</h4>
                <p>
                  We’re ready to help you anticipate the workforce changes
                  ahead, implement the technologies you’ll need to navigate them
                  and empower your people to thrive in the booming digital
                  economy. <b>Let’s get you future-ready.</b>
                </p>
                <h4>Reinvent possible at the Collaboratory.</h4>
                <p>
                  Let’s explore game-changing advancements together in one of
                  the Collaboratories in our global innovation network, where we
                  visualize and co-create the future of digital business.{" "}
                  <b>Let’s think fast, together.</b>
                </p>
              </div>
            </div>

            <div className="row about-extra">
              <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
                <img src={AboutUs2} className="img-fluid" alt="AboutUS" />
              </div>

              <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                <h4>Get from point A to point B</h4>
                <p>
                  In our Company, we fast-track products and solutions designed
                  to solve the challenges you face, so you can seize the
                  unprecedented opportunities that today’s technology offers.
                  <b> Let’s propel your business forward. </b>
                </p>

                <h4>Access Our Corporate Profile</h4>
                <p>
                  When we do digital solutions at scale and speed, we
                  systematically rethink how our clients can create value
                  everywhere in their organizations at the speed expercted by
                  their customers. Leran more about our company our culture and
                  our commitment to digital solutions
                </p>
                <a href="https://drive.google.com/open?id=18bfe4rwCwgCEQDetwcpI8O3Lfhg3uEVi">
                  <button className="button button100">
                    Access Our Corporate Profile
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* A COMPANY BUILT FOR YOU */}
        <section id="services" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>A Company built for you</h3>
              <p>
                At Indexial, we are <b>Indexial Solutions</b> : focused on
                understanding challenges, aware of opportunities, driven to
                solve for you.
              </p>
            </header>

            <div className="row">
              <div
                className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="ion-ios-analytics-outline"
                      style={{ color: "#ff689b" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Our culture</a>
                  </h4>
                  <p className="description">
                    Shaped by a diverse group of entrepreneurial people working
                    together to create a better way with you.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-5 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="ion-ios-bookmarks-outline"
                      style={{ color: "#e9bf06" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Our partners</a>
                  </h4>
                  <p className="description">
                    We work with companies on the vanguard of technology to
                    drive your business forward.
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="ion-ios-paper-outline"
                      style={{ color: "#3fcdc7" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Our skill developers</a>
                  </h4>
                  <p className="description">
                    We support lifelong learning in the India and around the
                    world, preparing people to make the most of the technology
                    that can forge our shared future.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-5 wow bounceInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="ion-ios-speedometer-outline"
                      style={{ color: "#41cf2e" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Our growth</a>
                  </h4>
                  <p className="description">
                    Our ambition will always be to see and seize new
                    opportunities that serve our clients and drive sustained
                    business performance for Indexial over the long term.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* #services  */}

        {/* Team Jurney */}
        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3>Our Journey</h3>
            </header>

            <div className="row about-container">
              <div className="col-lg-6 content order-lg-1 order-2">
                <div className="icon-box wow fadeInUp">
                  <div className="icon">
                    <i className="fa fa-rss"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Short Story</a>
                  </h4>
                  <p className="description">
                    In the month of January 2013 Indexial solutions started with
                    the 1st project and the team of 2 people working in the
                    flat. Young Enthusiastic and Hardworking team completed its
                    1st project and moved their first step towards success. on
                    the 16th of June 2013 they rentted out the corporate office
                    in the city of Pune. Indexial launch lots of IT services and
                    products which help society to become a better place. In
                    2016 Indexial started software consulting as a service and
                    the new unicorn in the consulting has been born. with the
                    help of that indexial solution is serving the best and wide
                    range of services and product to society
                  </p>
                </div>
              </div>

              <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                <img
                  src={Movie}
                  className="img-fluid"
                  alt="Company's Growth Journey"
                />
              </div>
            </div>
          </div>
        </section>
        {/* #jurney */}

        {/* Clients Section */}
        <section id="testimonials" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Testimonials</h3>
            </header>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="owl-carousel testimonials-carousel wow fadeInUp">
                  <div className="testimonial-item">
                    <img
                      src={testimonial1}
                      className="testimonial-img"
                      alt=" Client Testmonial"
                    />
                    <h3>Kiran G</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      We are quite satisfied with the services given byIndexial
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <img
                      src={testimonial2}
                      className="testimonial-img"
                      alt="Client Testmonial"
                    />
                    <h3>Sanket K</h3>
                    <h4>Project Manager</h4>
                    <p>
                      Quality is always there. Top of the game in terms of that
                      Indexial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* #testimonials */}

        {/* Clients Section */}
        <section id="clients" className="wow fadeIn">
          <div className="container">
            <div className="section-header">
              <h3>Our Clients</h3>
            </div>

            <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src={Client1} className="img-fluid" alt=" Our Clients" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src={Client2} className="img-fluid" alt="Our Clients" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src={Client3} className="img-fluid" alt="Our Clients" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src={Client4} className="img-fluid" alt="Our Clients" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src={Client5} className="img-fluid" alt="Our Clients" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src={Client6} className="img-fluid" alt="Our Clients" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src={Client7} className="img-fluid" alt="Our Clients" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src={Client8} className="img-fluid" alt="Our Clients" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
