import React from "react";
import Tech1 from "../img/tech1.svg";
import Tech2 from "../img/tech2.svg";
import Info from "./Common";
import Testimonials from "./Testimonials";

const Technology = () => {
  return (
    <>
      <section id="intro" class="clearfix">
        <div class="container">
          <div class="intro-img">
            <img src={Tech1} alt="Technology" class="img-fluid" />
          </div>

          <div class="intro-info">
            <h2>
              The integration of <br />
              miracles and <span>Technology</span>
            </h2>
            <div>
              <a href="Under_Maintenance.html" class="btn-services scrollto">
                get a quote
              </a>
              <a
                href="https://wa.me/918624922118"
                class="btn-get-started scrollto"
              >
                chat
              </a>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about">
          <div class="container">
            <header class="section-header">
              <h3>What We Offer</h3>
              <p>
                Indexial solutions offers a wide range of services to our
                individual and business clients. Our client receive personalized
                service that is beyond comparison.
              </p>
            </header>

            <div class="row about-container">
              <div class="col-lg-6 content order-lg-1 order-2">
                <div class="icon-box wow fadeInUp">
                  <div class="icon">
                    <i class="fa fa-signal"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Telecom</a>
                  </h4>
                  <p class="description">
                    Security and Networking solutions for the Telecom companies
                  </p>
                </div>

                <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
                  <div class="icon">
                    <i class="fa fa-money"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Finance</a>
                  </h4>
                  <p class="description">
                    We offer wide range of products for banking and Finance
                    Industry
                  </p>
                </div>

                <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
                  <div class="icon">
                    <i class="fa fa-car"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Automobile</a>
                  </h4>
                  <p class="description">
                    Digital Solutions for the automobile insustry and much more
                  </p>
                </div>

                <div class="icon-box wow fadeInUp" data-wow-delay="0.6s">
                  <div class="icon">
                    <i class="fa fa-plus-square"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Health</a>
                  </h4>
                  <p class="description">
                    Helthcare products for making the society better place
                  </p>
                </div>

                <div class="icon-box wow fadeInUp" data-wow-delay="0.8s">
                  <div class="icon">
                    <i class="fa fa-book"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Education</a>
                  </h4>
                  <p class="description">
                    One Stop solution for the Educational Institue
                  </p>
                </div>
                <div class="icon-box wow fadeInUp" data-wow-delay="0.8s">
                  <div class="icon">
                    <i class="fa fa-shopping-basket "></i>
                  </div>
                  <h4 class="title">
                    <a href="">E-commerce</a>
                  </h4>
                  <p class="description">
                    Full stack enterprise platform for E commerce companies
                  </p>
                </div>
              </div>

              <div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                <img src={Tech2} class="img-fluid" alt="Technology" />
              </div>
            </div>
          </div>
        </section>
        <section id="services" class="section-bg">
          <div class="container">
            <header class="section-header">
              <h3>Technologies We Use</h3>
              <p>
                We offer solutions beyond software with dedicated experts and
                technology such as
              </p>
            </header>

            <div class="row">
              <div
                class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div class="box">
                  <div class="icon">
                    <i
                      class="ion-ios-world-outline"
                      style={{ color: "#ff689b" }}
                    ></i>
                  </div>
                  <h4 class="title">
                    <a href="">Backend Engineering</a>
                  </h4>
                  <p class="description">
                    We use Java and JavaScript based frameworks for server-side
                    development. We use relational as well as NoSQL databases
                    for faster processing of complex set of data.
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-5 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div class="box">
                  <div class="icon">
                    <i
                      class="ion-ios-monitor-outline"
                      style={{ color: "#e9bf06" }}
                    ></i>
                  </div>
                  <h4 class="title">
                    <a href="">Frontend Engineering</a>
                  </h4>
                  <p class="description">
                    JavaScript in combination with HTML and CSS has
                    revolutionized the way web and mobile applications are built
                    and we are extremely adept at implementing the JS universe
                  </p>
                </div>
              </div>

              <div
                class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.4s"
              >
                <div class="box">
                  <div class="icon">
                    <i
                      class="ion-social-android-outline"
                      style={{ color: "#3fcdc7" }}
                    ></i>
                  </div>
                  <h4 class="title">
                    <a href="">Mobility</a>
                  </h4>
                  <p class="description">
                    Experts in developing experiential applications using native
                    as well as hybrid technologies for mobile, tablets and
                    connected devices.
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-5 wow bounceInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.4s"
              >
                <div class="box">
                  <div class="icon">
                    <i
                      class="ion-ios-speedometer-outline"
                      style={{ color: "#41cf2e" }}
                    ></i>
                  </div>
                  <h4 class="title">
                    <a href="">Data Engineering</a>
                  </h4>
                  <p class="description">
                    Data is the key to effective decision making. Uncover
                    meaningful and actionable insights from a huge amount of
                    data.
                  </p>
                </div>
              </div>

              <div
                class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1.4s"
              >
                <div class="box">
                  <div class="icon">
                    <i
                      class="ion-ios-cloud-upload-outline"
                      style={{ color: "#d6ff22" }}
                    ></i>
                  </div>
                  <h4 class="title">
                    <a href="">DevOps</a>
                  </h4>
                  <p class="description">
                    DevOps led development improves time to market, increases
                    efficiency and reduces redundancy in the system.
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-5 wow bounceInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1.4s"
              >
                <div class="box">
                  <div class="icon">
                    <i
                      class="ion-android-options"
                      style={{ color: "#4680ff" }}
                    ></i>
                  </div>
                  <h4 class="title">
                    <a href="">Testing</a>
                  </h4>
                  <p class="description">
                    Zero-bug application is a distant dream but our automation
                    and manual testing experts help you achieve it.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Info />

        <Testimonials />
      </main>
    </>
  );
};

export default Technology;
