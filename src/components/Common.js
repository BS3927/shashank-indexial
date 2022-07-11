import React from "react";
import CountUp from "./CountUp";
import { useInView } from "react-intersection-observer";
import HomeImg2 from "../img/home2.svg";
import Tech2 from "../img/tech2.svg";

export const TechUse = () => {
  const TechData = [
    {
      title: "Backend Engineering",
      class: "offset-lg-1",
      icon: "ion-ios-world-outline",
      color: "#ff689b",
      delay: "0s",
      herf: "",
      desc: "We use Java and JavaScript based frameworks for server-side development. We use relational as well as NoSQL databases for faster processing of complex set of data.",
    },
    {
      title: "Frontend Engineering",
      class: "",
      icon: "ion-ios-monitor-outline",
      color: "#e9bf06",
      delay: "0s",
      href: "",
      desc: "JavaScript in combination with HTML and CSS has revolutionized the way web and mobile applications are built and we are extremely adept at implementing the JS universe",
    },
    {
      title: "Mobility",
      class: "offset-lg-1",
      icon: "ion-social-android-outline",
      color: "#3fcdc7",
      delay: "0.1s",
      href: "",
      desc: "Experts in developing experiential applications using native as well as hybrid technologies for mobile, tablets and connected devices.",
    },
    {
      title: "Data Engineering",
      class: "",
      icon: "ion-ios-speedometer-outline",
      color: "#41cf2e",
      delay: "0.1s",
      href: "",
      desc: "Data is the key to effective decision making. Uncover meaningful and actionable insights from a huge amount of",
    },
    {
      title: "DevOps",
      class: "offset-lg-1",
      icon: "ion-ios-cloud-upload-outline",
      color: "#d6ff22",
      delay: "0.2s",
      href: "",
      desc: "DevOps led development improves time to market, increases efficiency and reduces redundancy in the system.",
    },
    {
      title: "Testing",
      class: "",
      icon: "ion-android-options",
      color: "#4680ff",
      delay: "0.2s",
      href: "",
      desc: "Zero-bug application is a distant dream but our automation and manual testing experts help you achieve it.",
    },
  ];
  return (
    <section id="services" class="section-bg">
      <div class="container">
        <header class="section-header">
          <h3>Technologies We Use</h3>
          <p>
            We offer solutions beyond software with dedicated experts and
            technology such as
          </p>
        </header>

        <div class="row">
          {TechData.map(function (o, i) {
            return (
              <div
                class={`col-md-6 col-lg-5 ${o.class} wow bounceInUp`}
                data-wow-duration="1.4s"
                data-wow-delay={o.delay}
              >
                <div class="box">
                  <div class="icon">
                    <i class={o.icon} style={{ color: o.color }}></i>
                  </div>
                  <h4 class="title">
                    <a href={o.href}>{o.title}</a>
                  </h4>
                  <p class="description">{o.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const TechOffer = () => {
  const OfferData = [
    {
      title: "Telecom",
      delay: "0s",
      icon: "fa fa-signal",
      href: "",
      desc: "Security and Networking solutions for the Telecom companies",
    },
    {
      title: "Finance",
      delay: "0.2s",
      icon: "fa fa-money",
      href: "",
      desc: "We offer wide range of products for banking and Financ Industry",
    },
    {
      title: "Automobile",
      delay: "0.4s",
      icon: "fa fa-car",
      href: "",
      desc: "Digital Solutions for the automobile insustry and much more",
    },
    {
      title: "Health",
      delay: "0.6s",
      icon: "fa fa-plus-square",
      href: "",
      desc: "Helthcare products for making the society better place",
    },
    {
      title: "Education",
      delay: "0.8s",
      icon: "fa fa-book",
      href: "",
      desc: "One Stop solution for the Educational Institue",
    },
    {
      title: "E-commerce",
      delay: "0.8s",
      icon: "fa fa-shopping-basket",
      href: "",
      desc: "Full stack enterprise platform for E commerce companies",
    },
  ];
  return (
    <section id="about">
      <div class="container">
        <header class="section-header">
          <h3>What We Offer</h3>
          <p>
            Indexial solutions offers a wide range of services to our individual
            and business clients. Our client receive personalized service that
            is beyond comparison.
          </p>
        </header>

        <div class="row about-container">
          <div class="col-lg-6 content order-lg-1 order-2">
            {OfferData.map(function (o, i) {
              return (
                <div class="icon-box wow fadeInUp" data-wow-delay={o.delay}>
                  <div class="icon">
                    <i class={o.icon}></i>
                  </div>
                  <h4 class="title">
                    <a href={o.href}>{o.title}</a>
                  </h4>
                  <p class="description">{o.desc}</p>
                </div>
              );
            })}
          </div>

          <div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <img src={Tech2} class="img-fluid" alt="Technology" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const HomeOffer = () => {
  const OfferItems = [
    {
      title: "Analyse",
      delay: "0s",
      icon: "fa fa-bar-chart",
      href: "",
      desc: "Stay in the flow of analysis. Share what you’ve discovered and watch the value of your work multiply. We offer certified installation and consulting services for the most popular server and cloud-based billing, accounting and practice management software packages for law firms and small businesses.",
    },
    {
      title: "Enterprise ERP",
      delay: "0s",
      icon: "fa fa-braille",
      href: "",
      desc: "ERP is the integrated management of core business processes, often in real-time and mediated by software and technology.The basic goal of ERP system is to provide one central repository for all information that is shared by all the various ERP facets to improve the flow of data across the organization.",
    },
    {
      title: "Friendly Supports",
      delay: "0s",
      icon: "fa fa-handshake-o",
      href: "",
      desc: "Our professional engineers are waiting to serve you. All of the skillful workers are thirsty to provide you with the quality durable products.Choose to focus your time, energy and conversation around people who inspire you, support you and help you to grow you into your happiest, strongest, wisest self.",
    },
  ];
  return (
    <section id="about">
      <div className="container">
        <header className="section-header">
          <h3>What We Offer</h3>
          <p>
            Indexial solutions offers a wide range of services to our individual
            and business clients. Our client receive personalized service that
            is beyond comparison.
          </p>
        </header>

        <div className="row about-container">
          <div className="col-lg-6 content order-lg-1 order-2">
            {OfferItems.map(function (o, i) {
              return (
                <div className="icon-box wow fadeInUp" data-wow-delay={o.delay}>
                  <div className="icon">
                    <i className={o.icon}></i>
                  </div>
                  <h4 className="title">
                    <a href={o.href}>{o.title}</a>
                  </h4>
                  <p className="description">{o.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <img src={HomeImg2} className="img-fluid" alt="Indexial" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Offers = () => {
  const OfferList = [
    {
      title: "Digitalization of business",
      delay: "0s",
      icon: "fa fa-rss",
      href: "",
      desc: "We can help to rebuilt and rebrand your business models, products and customer experiences to drive new value for your venture",
    },
    {
      title: "digitalization of Operations",
      delay: "0.2s",
      icon: "fa fa-laptop",
      href: "",
      desc: "ERP is the integrated management of core business processes, often in real-time and mediated by software and technology.The basic goal of ERP system is to provide one central repository for all information that is shared by all the various ERP facets to improve the flow of data across the organization.",
    },
    {
      title: "Digitalize System and Environment",
      delay: "0.4s",
      icon: "fa fa-id-badge",
      href: "",
      desc: "Our professional engineers are waiting to serve you a digital system and digital environment to focus your time, energy and conversation around people who inspire you, support you and help you to grow you into your happiest, strongest, wisest self.",
    },
  ];
  return (
    <>
      {OfferList.map(function (o, i) {
        return (
          <div className="icon-box wow fadeInUp" data-wow-delay={o.delay}>
            <div className="icon">
              <i className={o.icon}></i>
            </div>
            <h4 className="title">
              <a href={o.href}>{o.title}</a>
            </h4>
            <p className="description">{o.desc}</p>
          </div>
        );
      })}
    </>
  );
};

export const ServiceItems = () => {
  const ServiceData = [
    {
      title: "Web Application Development",
      class: "offset-lg-1",
      icon: "ion-ios-world-outline",
      color: "#ff689b",
      delay: "0s",
      href: "",
      desc: "Web development is a broad term for the work involved in developing a web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web-based internet applications electronic businesses, and social network services.",
    },
    {
      title: "UI/UX Design",
      class: "",
      icon: "ion-ios-monitor-outline",
      color: "#e9bf06",
      delay: "0s",
      href: "",
      desc: 'User Interface Design is its compliment, the look and feel, the presentation and interactivity of a product. But like UX, it is easily and often confused by the industries that employ UI Designers. design or user interface engineering is the design of user interfaces for machines and software{" "}',
    },
    {
      title: "Embedded Design",
      class: "offset-lg-1",
      icon: "ion-android-options",
      color: "#3fcdc7",
      delay: "0.1s",
      href: "",
      desc: "An embedded system is a programmed controlling and operating system with a dedicated function within a larger mechanical or electrical system, often with real-time computing constraints",
    },
    {
      title: "Application Design",
      class: "",
      icon: "ion-ios-speedometer-outline",
      color: "#41cf2e",
      delay: "0.1s",
      href: "",
      desc: "A comprehensive guide to app design. Developing a mobile application is a big investment, and the fundamental stages of the project should be providing a solid 'building material'.",
    },
    {
      title: "Mobile App Development",
      class: "offset-lg-1",
      icon: "ion-social-android-outline",
      color: "#d6ff22",
      delay: "0.2s",
      href: "",
      desc: "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
    },
    {
      title: "Cloud Services",
      class: "",
      icon: "ion-ios-cloud-upload-outline",
      color: "#4680ff",
      delay: "0.2s",
      href: "",
      desc: "Cloud computing is shared pools of configurable computer system resources and higher-level services that can be rapidly provisioned with minimal management effort.",
    },
    {
      title: "Consulting",
      class: "offset-lg-1",
      icon: "ion-android-contract",
      color: "#d6ff22",
      delay: "0.2s",
      href: "",
      desc: "Our management consulting services focus on our clients' most critical issues and opportunities: strategy, marketing, organization, technology, transformation, digital, advanced analytics",
    },
    {
      title: "QA Services",
      class: "",
      icon: "ion-image",
      color: "#4680ff",
      delay: "0.2s",
      href: "",
      desc: "A good testing and QA services ensures to minimize the cost, mitigate risk, augment user experience levels by offering a creative solutions to improve product life cycle.",
    },
  ];
  return (
    <section id="services" className="section-bg">
      <div className="container">
        <header className="section-header">
          <h3>Services for Digital Transformation</h3>
          <p>
            We offer services with dedicated experts and best technologies that
            that can transfrom world to be a better place to live
          </p>
        </header>

        <div className="row">
          {ServiceData.map(function (o, i) {
            return (
              <div
                className={`col-md-6 col-lg-5 ${o.class} wow bounceInUp`}
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i className={o.icon} style={{ color: o.color }}></i>
                  </div>
                  <h4 className="title">
                    <a href={o.href}>{o.title}</a>
                  </h4>
                  <p className="description">
                    {o.desc}
                    <br />
                    <a href={o.href}>
                      {" "}
                      <button className="button button100">know More</button>
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
