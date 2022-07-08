import React from "react";
import Client1 from "../img/clients/client-1.png";
import Client2 from "../img/clients/client-2.png";
import Client3 from "../img/clients/client-3.png";
import Client4 from "../img/clients/client-4.png";
import Client5 from "../img/clients/client-5.png";
import Client6 from "../img/clients/client-6.png";
import Client7 from "../img/clients/client-7.png";
import Client8 from "../img/clients/client-8.png";

export const Jobs = () => {
  const JobData = [
    {
      title: "Selinium tester(Manual + Automation)",
      icon: "ion-ios-world-outline",
      color: "#fac19b",
      ref: 385693,
      exp: "3 - 5",
      type: "Permanent",
      location: "Pune",
      department: "Services",
      class: "offset-lg-1",
    },
    {
      title: "Database Admin",
      icon: "ion-ios-keypad-outline",
      color: "#37c7a9",
      ref: 38221493,
      exp: "2 - 4",
      type: "Permanent",
      location: "Pune",
      department: "Maintaince",
      class: "",
    },
    {
      title: "Scrum Master",
      icon: "ion-grid",
      color: "#ff689b",
      ref: 385693,
      exp: "3 - 5",
      type: "Permanent",
      location: "Pune",
      department: "Services",
      class: "offset-lg-1",
    },
    {
      title: "UI UX Designer",
      icon: "ion-ios-world-outline",
      color: "#e9bf06",
      ref: 3781493,
      exp: "2 - 3",
      type: "Permanent",
      location: "Pune",
      department: "Maintaince",
      class: "",
    },
    {
      title: "Python With AI ML",
      icon: "ion-ios-world-outline",
      color: "#3fcdc7",
      ref: 17293,
      exp: "5 - 7",
      type: "Permanent",
      location: "Pune",
      department: "Services",
      class: "offset-lg-1",
    },
    {
      title: "Java Full Stack Developer",
      icon: "ion-social-android-outline",
      color: "#41cf2e",
      ref: 787293,
      exp: "3 - 5",
      type: "Permanent",
      location: "Pune",
      department: "Development",
      class: "",
    },
    {
      title: "Dot Net Developer",
      icon: "ion-ios-world-outline",
      color: "#d6ff22",
      ref: 287383,
      exp: "3 - 5",
      type: "Permanent",
      location: "Pune",
      department: "Development",
      class: "offset-lg-1",
    },
    {
      title: "Business Analyst",
      icon: "ion-stats-bars",
      color: "#4680ff",
      ref: 387293,
      exp: "3 - 5",
      type: "Permanent",
      location: "Pune",
      department: "Services",
      class: "",
    },
  ];
  return (
    <>
      {JobData.map(function (obj, ind) {
        return (
          <div
            className={`col-md-6 col-lg-5 ${obj.class} wow bounceInUp`}
            data-wow-duration="1.4s"
            key={ind}
          >
            <div className="box">
              <div className="icon">
                <i className={obj.icon} style={{ color: obj.color }}></i>
              </div>

              <h4 className="title">
                <a href="">{obj.title}</a>
              </h4>
              <p className="description">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Ref:{obj.ref}</li>
                  <li>Experience: {obj.exp} years</li>
                  <li>Contract type: {obj.type}</li>
                  <li>location : {obj.location} </li>
                  <li>Department:{obj.department}</li>
                </ul>
                &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                <a href="Under_Maintenance.html">
                  {" "}
                  <button className="button button100">Apply Now</button>
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

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
    <section id="clients" classNameName="wow fadeIn">
      <div classNameName="container">
        <div classNameName="section-header">
          <h3>Our Clients</h3>
        </div>

        <div classNameName="row no-gutters clients-wrap clearfix wow fadeInUp">
          {ClientList.map(function (image, i) {
            return (
              <>
                <div classNameName="col-lg-3 col-md-4 col-xs-6" key={i}>
                  <div classNameName="client-logo">
                    <img src={image} classNameName="img-fluid" alt="Client" />
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
