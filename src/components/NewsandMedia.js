import React from "react";
import News from "../img/news.svg";
import Media from "../img/techcrunch.jpg";

const NewsandMedia = () => {
  return (
    <>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img src={News} alt="News" className="img-fluid" />
          </div>

          <div className="intro-info">
            <h2>
              Find what is
              <br />
              <span>Trending in</span>
              <br />
              Indeixal Solutions
            </h2>
            <div>
              <a href="contact.html" className="btn-services scrollto">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3>In The News</h3>
              <p>
                Find out what’s new with Indexial Solutions, our people and
                diverse operations. Read on the latest press releases &
                announcements, news articles and insights to learn all that
                we’re innovating in the field of Technology.
              </p>
            </header>

            <div className="card-group">
              <div
                className="card col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <img className="card-img-top" src={Media} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Indeixal solutions news</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Read More</small>
                  </p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={Media} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Indeixal solutions newse</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Read More</small>
                  </p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={Media} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Indeixal solutions news</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Read More</small>
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
export default NewsandMedia;
