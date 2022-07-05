import React from "react";
import CountUp from "./CountUp";

const Info = () => {
  return (
    <section id="why-us" className="wow fadeIn">
      <div className="container">
        <header className="section-header">
          <h3>Trusted By</h3>
          <p> 10+ Fortune 150 Companies</p>
        </header>

        <div className="row counters">
          <div className="col-lg-3 col-6 text-center counter-up">
            <CountUp start={0} end={280} timer={10} />
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center counter-up">
            <CountUp start={0} end={32} timer={50} />
            <p>Projects</p>
          </div>

          <div className="col-lg-3 col-6 text-center counter-up">
            <CountUp start={0} end={20} timer={50} />
            <p>Won Awards</p>
          </div>

          <div className="col-lg-3 col-6 text-center counter-up">
            <CountUp start={0} end={80} timer={20} />
            <p>Hard Workers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
