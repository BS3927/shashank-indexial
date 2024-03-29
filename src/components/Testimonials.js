import React from "react";
import Testimonial1 from "../img/testimonial-1.jpg";
import Testimonial2 from "../img/testimonial-2.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Testimonials = () => {
  return (
    <section id="testimonials" className="section-bg">
      <div className="container">
        <header className="section-header">
          <h3>Testimonials</h3>
        </header>

        <div className="row">
          <div className="offset-3 col-lg-8">
            <OwlCarousel items={1} autoplay={true} loop>
              <div className="testimonial-item">
                <img
                  src={Testimonial1}
                  className="testimonial-img"
                  alt=" Client Testimonial"
                />
                <h3>Kiran G</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>We are quite satisfied with the services given byIndexial</p>
              </div>

              <div className="testimonial-item">
                <img
                  src={Testimonial2}
                  className="testimonial-img"
                  alt="Client Testimonial"
                />
                <h3>Sanket K</h3>
                <h4>Project Manager</h4>
                <p>
                  Quality is always there. Top of the game in terms of that
                  Indexial
                </p>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
