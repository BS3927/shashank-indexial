import React from "react";
import AboutImg from "../img/about.svg";
import AboutUs from "../img/aboutus.svg";
import AboutUs2 from "../img/aboutus2.svg";
import Movie from "../img/movie.gif";
import Clients, { CompanyInfo } from "./Reusable";
import Testimonials from "./Testimonials";

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

        <CompanyInfo />

        {/* #services  */}

        {/* Team Journey */}
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
        {/* #journey */}

        {/* Clients Section */}
        <Testimonials />
        {/* #testimonials */}

        {/* Clients Section */}
        <Clients />
      </main>
    </>
  );
};

export default About;
