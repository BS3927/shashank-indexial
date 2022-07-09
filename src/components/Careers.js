import React from "react";
import Career1 from "../img/c.svg";
import Career2 from "../img/career.svg";
import { Jobs } from "./Reusable";

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
        <section id="about">
          <div class="container">
            <header class="section-header">
              <h3>Work at indexial Solutions!</h3>
              <p>Honesty, ownership and perseverance is how we go about it.</p>
            </header>

            <div class="row about-container">
              <div class="col-lg-6 content order-lg-1 order-2">
                <div class="icon-box wow fadeInUp">
                  <div class="icon">
                    <i class="fa fa-wpforms"></i>
                  </div>
                  <h4 class="title">
                    <a href="#/Careers">How We Work</a>
                  </h4>
                  <p class="description">
                    Working hard for things that we don't care about is stress,
                    but working hard for something we love is called passion! At
                    Haptik we passionately solve problems in order to be able to
                    move faster and don't shy away from breaking things!
                  </p>
                </div>

                <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
                  <div class="icon">
                    <i class="fa fa-thumbs-o-up"></i>
                  </div>
                  <h4 class="title">
                    <a href="#/Careers">Getting Things Done</a>
                  </h4>
                  <p class="description">
                    Strategize, execute and ship it! Done? Onto the next
                    assignment. Move at breakneck pace.
                  </p>
                </div>

                <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
                  <div class="icon">
                    <i class="fa fa-hand-peace-o"></i>
                  </div>
                  <h4 class="title">
                    <a href="#/Careers">Enjoy Yourself</a>
                  </h4>
                  <p class="description">
                    While we are working hard, it is also important to take
                    breaks to not get too worked up. Stand up and walk away from
                    your work stations, play a game, chat a little and then get
                    back to work with double the energy!
                  </p>
                </div>
              </div>

              <div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                <img src={Career2} class="img-fluid" alt=" Career" />
              </div>
            </div>
          </div>
        </section>

        <Jobs />
      </main>
    </>
  );
};

export default Careers;
