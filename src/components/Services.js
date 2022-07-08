import React from "react";
import service from "../img/services.svg";
import service2 from "../img/services2.svg";
import Info from "./Common";
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
        <section id="services" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Services for Digital Transformation</h3>
              <p>
                We offer services with dedicated experts and best technologies
                that that can transfrom world to be a better place to live
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
                      className="ion-ios-world-outline"
                      style={{ color: "#ff689b" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Web Application Development</a>
                  </h4>
                  <p className="description">
                    Web development is a broad term for the work involved in
                    developing a web site for the Internet or an intranet. Web
                    development can range from developing a simple single static
                    page of plain text to complex web-based internet
                    applications electronic businesses, and social network
                    services.
                    <br />
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">know More</button>
                    </a>
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
                      className="ion-ios-monitor-outline"
                      style={{ color: "#e9bf06" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">UI/UX Design</a>
                  </h4>
                  <p className="description">
                    User Interface Design is its compliment, the look and feel,
                    the presentation and interactivity of a product. But like
                    UX, it is easily and often confused by the industries that
                    employ UI Designers. design or user interface engineering is
                    the design of user interfaces for machines and software{" "}
                    <br />
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">know More</button>
                    </a>
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
                      className="ion-android-options"
                      style={{ color: "#3fcdc7" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Embedded Design</a>
                  </h4>
                  <p className="description">
                    An embedded system is a programmed controlling and operating
                    system with a dedicated function within a larger mechanical
                    or electrical system, often with real-time computing
                    constraints <br />
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">know More</button>
                    </a>
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
                    <a href="">Application Design</a>
                  </h4>
                  <p className="description">
                    A comprehensive guide to app design. Developing a mobile
                    application is a big investment, and the fundamental stages
                    of the project should be providing a solid 'building
                    material'.
                    <br />
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">know More</button>
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="ion-social-android-outline"
                      style={{ color: "#d6ff22" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Mobile App Development</a>
                  </h4>
                  <p className="description">
                    Mobile app development is the act or process by which a
                    mobile app is developed for mobile devices, such as personal
                    digital assistants, enterprise digital assistants or mobile
                    phones.
                    <br />
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">know More</button>
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-5 wow bounceInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="ion-ios-cloud-upload-outline"
                      style={{ color: "#4680ff" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Cloud Services</a>
                  </h4>
                  <p className="description">
                    Cloud computing is shared pools of configurable computer
                    system resources and higher-level services that can be
                    rapidly provisioned with minimal management effort.
                    <br />
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">know More</button>
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="ion-android-contract"
                      style={{ color: "#d6ff22" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Consulting </a>
                  </h4>
                  <p className="description">
                    Our management consulting services focus on our clients'
                    most critical issues and opportunities: strategy, marketing,
                    organization, technology, transformation, digital, advanced
                    analytics
                    <br />
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">know More</button>
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-5 wow bounceInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i className="ion-image" style={{ color: " #4680ff" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="">QA Services</a>
                  </h4>
                  <p className="description">
                    A good testing and QA services ensures to minimize the cost,
                    mitigate risk, augment user experience levels by offering a
                    creative solutions to improve product life cycle.
                    <br />
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">know More</button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Info />

        <Testimonials />
        <Clients />
      </main>
    </>
  );
};

export default Services;
