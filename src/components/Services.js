import React from "react";
import service from "../img/services.svg";
import service2 from "../img/services2.svg";
import Info, { ServiceItems } from "./Common";
import Clients from "./Reusable";
import Testimonials from "./Testimonials";

const Services = () => {
  return (
    <>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img
              src={service}
              height="1000000px"
              width="100000px"
              alt="Services"
              className="img-fluid"
            />
          </div>

          <div className="intro-info">
            <h2>
              We build <span>services</span>
              <br />
              for tomorrow!
            </h2>
            <div>
              <a
                href="Under_Maintenance.html"
                className="btn-services scrollto"
              >
                get a quote
              </a>
              <a
                href="https://wa.me/918624922118"
                className="btn-get-started scrollto "
              >
                chat
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
                    <i className="fa fa-rss"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Digitalization of business</a>
                  </h4>
                  <p className="description">
                    {" "}
                    We can help to rebuilt and rebrand your business models,
                    products and customer experiences to drive new value for
                    your venture
                  </p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon">
                    <i className="fa fa-laptop"></i>
                  </div>
                  <h4 className="title">
                    <a href="">digitalization of Operations</a>
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
                    <i className="fa fa-id-badge"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Digitalize System and Environment</a>
                  </h4>
                  <p className="description">
                    Our professional engineers are waiting to serve you a
                    digital system and digital environment to focus your time,
                    energy and conversation around people who inspire you,
                    support you and help you to grow you into your happiest,
                    strongest, wisest self.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                <img src={service2} className="img-fluid" alt="Services" />
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

export default Services;
