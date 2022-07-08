import React from "react";
import CountUp from "./CountUp";
import { useInView } from "react-intersection-observer";

const Info = () => {
  const Data = [
    {
      name: "Clients",
      number: 280,
      timer: 10,
    },
    {
      name: "Projects",
      number: 32,
      timer: 50,
    },
    {
      name: "Won Awards",
      number: 20,
      timer: 50,
    },
    {
      name: "Hard Workers",
      number: 80,
      timer: 20,
    },
  ];
  const { ref: myRef, inView: infoVisible } = useInView();
  return (
    <section id="why-us" className="wow fadeIn">
      <div className="container">
        <header className="section-header">
          <h3>Trusted By</h3>
          <p> 10+ Fortune 150 Companies</p>
        </header>

        <div className="row counters" ref={myRef}>
          {infoVisible ? (
            <>
              {Data.map(function (o, i) {
                return (
                  <div className="col-lg-3 col-6 text-center counter-up">
                    <CountUp start={0} end={o.number} timer={o.timer} />
                    <p>{o.name}</p>
                  </div>
                );
              })}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Info;
