import React from "react";
import Client1 from "../img/clients/client-1.png";
import Client2 from "../img/clients/client-2.png";
import Client3 from "../img/clients/client-3.png";
import Client4 from "../img/clients/client-4.png";
import Client5 from "../img/clients/client-5.png";
import Client6 from "../img/clients/client-6.png";
import Client7 from "../img/clients/client-7.png";
import Client8 from "../img/clients/client-8.png";

export const ProductItems = () => {
  const ProductList = [
    {
      title: "Cloud base HRMS",
      delay: "0s",
      icon: "ion-ios-cloud-upload-outline",
      color: "#ff689b",
      class: "offset-lg-1",
      desc: "HRMS or Human Resource Management System as it is usually known can be described as an arrangement of all the processes and systems that are required in order to proficiently manage the HR (human resource) department of an organization.",
      href: "https://drive.google.com/open?id=1O7DdJhIiQ5Pn6qFTNWBh3u8fguV_s654",
    },
    {
      title: "ERP System",
      delay: "0s",
      icon: "ion-ios-analytics-outline",
      color: "#e9bf06",
      class: "",
      desc: "ERP software is considered to be a type of enterprise application, that is software designed to be used by larger businesses and often requires dedicated teams to customize and analyze the data and to handle upgrades and deployment.",
      href: "https://drive.google.com/open?id=1Nws_L-iBQibLM2cyXfIAWwcxgK6pDaiB",
    },
    {
      title: "Point Of Sale (POS)",
      delay: "0.1s",
      icon: "ion-android-checkbox-outline",
      color: "#3fcdc7",
      class: "offset-lg-1",
      desc: "Meet the most versatile POS system for unifying your in-store and online sales. Delight customers at every touchpoint and win back time to focus on what matters most to your business. provides 24/7 support and Make informed decisions quickly also Cut down repetitive tasks off.",
      href: "https://drive.google.com/open?id=1_eWbarXeqS21abM0XTPErMXlRUbzBPtu",
    },
    {
      title: "Housing Society Mnanagement System",
      delay: "0.1s",
      icon: "ion-android-apps",
      color: "#41cf2e",
      class: "",
      desc: "Indexial Solution's housing management software solutions provide you with the flexibility to automate costly administration tasks and increase the visibility of tenant,supplier and contractor information.",
      href: "https://drive.google.com/open?id=1iRhk4nCLfYMeC8y9VFec8-wN8uZUaqD6",
    },
  ];
  return (
    <section id="services" class="section-bg">
      <div class="container">
        <header class="section-header">
          <h3>
            Passion of creating Mansion of technologies <br /> in your minds.
          </h3>
        </header>

        <div class="row">
          {ProductList.map(function (o, i) {
            return (
              <div
                class={`col-md-6 col-lg-5 ${o.class} wow bounceInUp`}
                data-wow-duration="1.4s"
              >
                <div class="box">
                  <div class="icon">
                    <i class={o.icon} style={{ color: o.color }}></i>
                  </div>
                  <h4 class="title">
                    <a href="">{o.title}</a>
                  </h4>
                  <p class="description">
                    {o.desc}
                    <br />
                    <a href={o.href}>
                      {" "}
                      <button class="button button100">know More</button>
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const CompanyInfo = () => {
  const Moto = [
    {
      title: "Our culture",
      delay: "",
      icon: "ion-ios-analytics-outline",
      color: "#ff689b",
      class: "offset-lg-1",
      desc: "Shaped by a diverse group of entrepreneurial people workin together to create a better way with you.",
    },
    {
      title: "Our partners",
      delay: "",
      icon: "ion-ios-bookmarks-outline",
      color: "#e9bf06",
      class: "",
      desc: "We work with companies on the vanguard of technology to drive your business forward.",
    },
    {
      title: "Our skill developers",
      delay: "0.1s",
      icon: "ion-ios-paper-outline",
      color: "#3fcdc7",
      class: "offset-lg-1",
      desc: "We support lifelong learning in the India and around the world, preparing people to make the most of the technology that can forge our shared future.",
    },
    {
      title: "Our growth",
      delay: "0.1s",
      icon: "ion-ios-speedometer-outline",
      color: "#41cf2e",
      class: "",
      desc: "Our ambition will always be to see and seize new opportunities that serve our clients and drive sustained business performance for Indexial over the long term.",
    },
  ];
  return (
    <section id="services" className="section-bg">
      <div className="container">
        <header className="section-header">
          <h3>A Company built for you</h3>
          <p>
            At Indexial, we are <b>Indexial Solutions</b> : focused on
            understanding challenges, aware of opportunities, driven to solve
            for you.
          </p>
        </header>
        <div className="row">
          {Moto.map(function (o, i) {
            return (
              <div
                className={`col-md-6 col-lg-5 ${o.class} wow bounceInUp`}
                data-wow-delay={o.delay}
                data-wow-duration="1.4s"
                key={i}
              >
                <div className="box">
                  <div className="icon">
                    <i className={o.icon} style={{ color: o.color }}></i>
                  </div>
                  <h4 className="title">
                    <a href="">{o.title}</a>
                  </h4>
                  <p className="description">{o.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

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
    <section id="services" class="section-bg">
      <div class="container">
        <header class="section-header">
          <h3>Current Openings</h3>
          <p>...</p>
        </header>

        <div class="row">
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
        </div>
      </div>
    </section>
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
    <section id="clients" className="wow fadeIn">
      <div className="container">
        <div className="section-header">
          <h3>Our Clients</h3>
        </div>

        <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
          {ClientList.map(function (image, i) {
            return (
              <>
                <div className="col-lg-3 col-md-4 col-xs-6" key={i}>
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
