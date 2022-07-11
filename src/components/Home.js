import React from "react";
import Info, { HomeOffer, ServiceItems } from "./Common";
import HomeImg from "../img/home.svg";
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
        <HomeOffer />

        <ServiceItems />

        <Info />

        <Testimonials />

        <Clients />
      </main>
    </>
  );
};

export default Home;
