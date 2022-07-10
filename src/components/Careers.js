import React from "react";
import Career1 from "../img/c.svg";
import { CareerList, Jobs } from "./Reusable";

const Careers = () => {
  return (
    <>
      <section id="intro" class="clearfix">
        <div class="container">
          <div class="intro-img">
            <img src={Career1} alt=" Information" class="img-fluid" />
          </div>

          <div class="intro-info">
            <h2>
              Love Your <span>Career</span> ,<br />
              Ace Your <span>Career</span>
              <br />
            </h2>
            <div>
              <a href="#/services" class="btn-services scrollto">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <CareerList />

        <Jobs />
      </main>
    </>
  );
};

export default Careers;
