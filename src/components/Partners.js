import React from "react";
import Partners1 from "../img/partners.svg";
import IFS from "../img/codenautics.png";
import Marquery from "../img/marquery.png";
import Web from "../img/web.png";

const Partners = () => {
  return (
    <>
      <section id="intro" class="clearfix">
        <div class="container">
          <div class="intro-img">
            <img src={Partners1} alt="Partners" class="img-fluid" />
          </div>

          <div class="intro-info">
            <h2>
              Our ecosystem<span> partners</span>
              <br />
              Explore our network!
            </h2>
            <div>
              <a href="Under_Maintenance.html" class="btn-services scrollto">
                Join us
              </a>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about">
          <div class="container">
            <header class="section-header">
              <h3>Key Aliances</h3>
              <p>
                We extend our technology and business capabilities through a
                powerful ecosystem of market leaders and innovators.
              </p>
            </header>

            <div class="card-group">
              <div
                class="card"
                className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <img class="card-img-top" src={IFS} alt="Card image cap" />
                <div class="card-body">
                  <h3 class="card-title">IFS India</h3>
                  <p class="card-text">
                    IFS is a leading IT solutions provider, offering
                    Applications, you will discover what so many global
                    enterprises have already discovered the power of certainty.
                  </p>
                  <p class="card-text">
                    <a href="#">
                      <small class="text-muted">Read More</small>
                    </a>
                  </p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={Marquery} alt="Card image cap" />
                <div class="card-body">
                  <h3 class="card-title">MarQuery</h3>
                  <p class="card-text">
                    MarQuery is the Convesational AI platform which helps
                    business to build lasting relationship with their customers
                    by using chatbots voicebots and other AI products
                  </p>
                  <p class="card-text">
                    <a href="#">
                      <small class="text-muted">Read More</small>
                    </a>
                  </p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={Web} alt="Card image cap" />
                <div class="card-body">
                  <h3 class="card-title">Web Farmatics</h3>
                  <p class="card-text">
                    Webfarmatics Technology offers its clients highly customized
                    solutions to increase performance of existing and new
                    process, increasing its productivity and profitability.
                  </p>
                  <p class="card-text">
                    <a href="#">
                      <small class="text-muted">Know More</small>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Partners;
