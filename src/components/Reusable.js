import React from "react";
import Client1 from "../img/clients/client-1.png";
import Client2 from "../img/clients/client-2.png";
import Client3 from "../img/clients/client-3.png";
import Client4 from "../img/clients/client-4.png";
import Client5 from "../img/clients/client-5.png";
import Client6 from "../img/clients/client-6.png";
import Client7 from "../img/clients/client-7.png";
import Client8 from "../img/clients/client-8.png";

const Clients = () => {
  const ClientList = [
    Client1,
    Client2,
    Client3,
    Client4,
    Client5,
    Client6,
    Client7,
    Client8,
  ];
  return (
    <section id="clients" className="wow fadeIn">
      <div className="container">
        <div className="section-header">
          <h3>Our Clients</h3>
        </div>

        <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
          {ClientList.map(function (image, i) {
            return (
              <>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo">
                    <img src={image} className="img-fluid" alt="Client" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
