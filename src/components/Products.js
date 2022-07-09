import React from "react";
import Product1 from "../img/product.svg";
import Product2 from "../img/product2.svg";
import Info from "./Common";
import { ProductItems } from "./Reusable";
import Testimonials from "./Testimonials";

const Products = () => {
  return (
    <>
      <section id="intro" class="clearfix">
        <div class="container">
          <div class="intro-img">
            <img src={Product1} alt="Product" class="img-fluid" />
          </div>

          <div class="intro-info">
            <h2>
              We build <span>products</span>
              <br />
              to make <span>world </span>better place
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
                    <i class="fa fa-rss"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Digitalization of business</a>
                  </h4>
                  <p class="description">
                    {" "}
                    We can help to rebuilt and rebrand your business models,
                    products and customer experiences to drive new value for
                    your venture
                  </p>
                </div>

                <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
                  <div class="icon">
                    <i class="fa fa-laptop"></i>
                  </div>
                  <h4 class="title">
                    <a href="">digitalization of Operations</a>
                  </h4>
                  <p class="description">
                    ERP is the integrated management of core business processes,
                    often in real-time and mediated by software and
                    technology.The basic goal of ERP system is to provide one
                    central repository for all information that is shared by all
                    the various ERP facets to improve the flow of data across
                    the organization.
                  </p>
                </div>

                <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
                  <div class="icon">
                    <i class="fa fa-id-badge"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Digitalize System and Environment</a>
                  </h4>
                  <p class="description">
                    Our professional engineers are waiting to serve you a
                    digital system and digital environment to focus your time,
                    energy and conversation around people who inspire you,
                    support you and help you to grow you into your happiest,
                    strongest, wisest self.
                  </p>
                </div>
              </div>

              <div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                <img src={Product2} class="img-fluid" alt="Product" />
              </div>
            </div>
          </div>
        </section>

        <ProductItems />

        <Info />

        <Testimonials />
      </main>
    </>
  );
};

export default Products;
