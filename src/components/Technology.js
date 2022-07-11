import React from "react";
import Tech1 from "../img/tech1.svg";
import Tech2 from "../img/tech2.svg";
import Info, { TechOffer, TechUse } from "./Common";
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
        {/* #What We Offer */}

        <TechOffer />

        {/* #What We Offer */}

        {/* #Technologies We Use */}

        <TechUse />

        {/* #Technologies We Use */}

        <Info />

        <Testimonials />
      </main>
    </>
  );
};

export default Technology;
