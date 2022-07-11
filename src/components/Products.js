import React from "react";
import Product1 from "../img/product.svg";
import Product2 from "../img/product2.svg";
import Info, { Offers } from "./Common";
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
                <Offers />
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
