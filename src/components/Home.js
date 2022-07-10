import React from "react";
import Info, { ServiceItems } from "./Common";
import HomeImg from "../img/home.svg";
import HomeImg2 from "../img/home2.svg";
import Clients from "./Reusable";
import Testimonials from "./Testimonials";
const Home = () => {
  return (
    <>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img
              src={HomeImg}
              height="1200"
              alt="Indexial"
              className="img-fluid"
            />
          </div>

          <div className="intro-info">
            <h2>
              <span>Indexing solutions</span>
              <br />
              for greater evolutions.
            </h2>
            <div>
              <a href="#/Home" className="btn-get-started scrollto">
                Get Started
              </a>
              <a href="#/Services" className="btn-services scrollto">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3>What We Offer</h3>
              <p>
                Indexial solutions offers a wide range of services to our
                individual and business clients. Our client receive personalized
                service that is beyond comparison.
              </p>
            </header>

            <div className="row about-container">
              <div className="col-lg-6 content order-lg-1 order-2">
                <div className="icon-box wow fadeInUp">
                  <div className="icon">
                    <i className="fa fa-bar-chart"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Analyse</a>
                  </h4>
                  <p className="description">
                    Stay in the flow of analysis. Share what you’ve discovered
                    and watch the value of your work multiply. We offer
                    certified installation and consulting services for the most
                    popular server and cloud-based billing, accounting and
                    practice management software packages for law firms and
                    small businesses.
                  </p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon">
                    <i className="fa fa-braille"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Enterprise ERP</a>
                  </h4>
                  <p className="description">
                    ERP is the integrated management of core business processes,
                    often in real-time and mediated by software and
                    technology.The basic goal of ERP system is to provide one
                    central repository for all information that is shared by all
                    the various ERP facets to improve the flow of data across
                    the organization.
                  </p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon">
                    <i className="fa fa-handshake-o"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Friendly Supports</a>
                  </h4>
                  <p className="description">
                    Our professional engineers are waiting to serve you. All of
                    the skillful workers are thirsty to provide you with the
                    quality durable products.Choose to focus your time, energy
                    and conversation around people who inspire you, support you
                    and help you to grow you into your happiest, strongest,
                    wisest self.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                <img src={HomeImg2} className="img-fluid" alt="Indexial" />
              </div>
            </div>
          </div>
        </section>
        <ServiceItems />

        <Info />

        <Testimonials />

        <Clients />
      </main>
    </>
  );
};

export default Home;
