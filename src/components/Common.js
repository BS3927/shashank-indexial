import React from "react";
import CountUp from "./CountUp";
import { useInView } from "react-intersection-observer";

export const ServiceItems = () => {
  const ServiceData = [
    {
      title: 'Web Application Development',
      class: 'offset-lg-1',
      icon: 'ion-ios-world-outline',
      color: '#ff689b',
      delay: '0s',
      herf: '',
      desc: 'Web development is a broad term for the work involved in developing a web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web-based internet applications electronic businesses, and social network services.',
    },
    {
      title: 'UI/UX Design',
      class: '',
      icon: 'ion-ios-monitor-outline',
      color: '#e9bf06',
      delay: '0s',
      herf: '',
      desc: 'User Interface Design is its compliment, the look and feel, the presentation and interactivity of a product. But like UX, it is easily and often confused by the industries that employ UI Designers. design or user interface engineering is the design of user interfaces for machines and software{" "}'
    },
    {
      title: 'Embedded Design',
      class: 'offset-lg-1',
      icon: 'ion-android-options',
      color: '#3fcdc7',
      delay: '0.1s',
      herf: '',
      desc: 'An embedded system is a programmed controlling and operating system with a dedicated function within a larger mechanical or electrical system, often with real-time computing constraints',
    },
    {
      title: 'Application Design',
      class: '',
      icon: 'ion-ios-speedometer-outline',
      color: '#41cf2e',
      delay: '0.1s',
      herf: '',
      desc: "A comprehensive guide to app design. Developing a mobile application is a big investment, and the fundamental stages of the project should be providing a solid 'building material'.",
    },
    {
      title: 'Mobile App Development',
      class: 'offset-lg-1',
      icon: 'ion-social-android-outline',
      color: '#d6ff22',
      delay: '0.2s',
      herf: '',
      desc: 'Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.',
    },
    {
      title: 'Cloud Services',
      class: '',
      icon: 'ion-ios-cloud-upload-outline',
      color: '#4680ff',
      delay: '0.2s',
      herf: '',
      desc: 'Cloud computing is shared pools of configurable computer system resources and higher-level services that can be rapidly provisioned with minimal management effort.',
    },
    {
      title: 'Consulting',
      class: 'offset-lg-1',
      icon: 'ion-android-contract',
      color: '#d6ff22',
      delay: '0.2s',
      herf: '',
      desc: "Our management consulting services focus on our clients' most critical issues and opportunities: strategy, marketing, organization, technology, transformation, digital, advanced analytics",
    },
    {
      title: 'QA Services',
      class: '',
      icon: 'ion-image',
      color: '#4680ff',
      delay: '0.2s',
      herf: '',
      desc: 'A good testing and QA services ensures to minimize the cost, mitigate risk, augment user experience levels by offering a creative solutions to improve product life cycle.',
    },
  ];
  return (
    <section id="services" className="section-bg">
      <div className="container">
        <header className="section-header">
          <h3>Services for Digital Transformation</h3>
          <p>
            We offer services with dedicated experts and best technologies
            that that can transfrom world to be a better place to live
          </p>
        </header>

        <div className="row">
          {
            ServiceData.map(function (o, i) {
              return <div
                className={`col-md-6 col-lg-5 ${o.class} wow bounceInUp`}
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className={o.icon}
                      style={{ color: o.color }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href={o.herf}>{o.title}</a>
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
            })
          }
        </div>
      </div>
    </section>
  );
}

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
