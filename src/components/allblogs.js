import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { motion as m } from "framer-motion";
import Footer from "./footer";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";

const Allblogs = () => {
  const hidenav = () => {
    document.body.style.overflow = "visible";
    const check = document.querySelector(".offcanvas");
    check.style.opacity = 0;
    check.style.zIndex = -1;
  };
  useEffect(() => {
    // ScrollSmoother.create({
    //   wrapper: "#smooth-wrapper",
    //   content: "#smooth-content",
    //   smooth: 2,
    //   smoothTouch: 0.1,
    //   effects: true,
    // });
    AOS.init({ duration: 2000 });
    var backtoTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 4100) {
        backtoTop.classList.add("active");
      } else {
        backtoTop.classList.remove("active");
      }
      backtoTop.style.transform = "rotate(" + window.pageYOffset + "deg)";
    });
  }, []);
  return (
    <>
      <m.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a id="back-to-top" href="#" className="back-to-top" role="button">
          <p className="scrollbtnp">Up</p>
        </a>
        <div className="smooth-wrapper" id="smooth-wrapper">
          <div id="smooth-content">
            <section id="news" className="pad30">
              {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3 navemail">
                  <Container fluid>
                    <Navbar.Brand href="/">
                      <img
                        src={"./assets/images/©.png"}
                        className="logomain"
                        alt="Logo"
                      />
                    </Navbar.Brand>
                    <Navbar.Brand href="/">
                      <img
                        src={"./assets/images/cpr_ico_white.png"}
                        className="logomain1"
                        alt="Logo"
                      />
                    </Navbar.Brand>
                    <Link to="/contact" className="talkbtntocontact">
                      <Button
                        variant="outline-secondary"
                        className="talkbtnemail"
                      >
                        Lets Get Started
                      </Button>{" "}
                    </Link>
                    <Navbar.Toggle
                      aria-controls={`offcanvasNavbar-expand-${expand}`}
                    >
                      <span className="navbar-toggler-icon1email"></span>
                      <span className="navbar-toggler-icon2email"></span>
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title
                          id={`offcanvasNavbarLabel-expand-${expand}`}
                        ></Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="">
                          <div className="container">
                            <div className="col-sm-5 float-start mobnavsocialicon">
                              <div className="c">C /</div>
                              <div className="navsocial">
                                <a
                                  href="https://www.facebook.com/constantineprandcommunications/"
                                  className=""
                                >
                                  Facebook
                                </a>
                                <a
                                  href="https://instagram.com/constantinepr?igshid=YmMyMTA2M2Y="
                                  className=""
                                >
                                  Instagram
                                </a>
                                {/* <a href="" className="">Twitter</a> */}
                                <a
                                  href="https://www.linkedin.com/company/constantine-pr-communications/"
                                  className=""
                                >
                                  Linkedin
                                </a>
                              </div>
                            </div>
                            <div className="col-sm-5 offset-sm-2 float-end">
                              <ul>
                                <li>
                                  <a
                                    onClick={hidenav}
                                    className="nav-link"
                                    smooth={true}
                                    href="/"
                                  >
                                    <span>Home</span>
                                  </a>
                                </li>
                                <li onClick={hidenav}>
                                  <a
                                    data-cursor-stick
                                    className="nav-link"
                                    smooth={true}
                                    href="/blogs"
                                  >
                                    <span>Work</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    onClick={hidenav}
                                    className="nav-link"
                                    smooth={true}
                                    href="/about-us"
                                  >
                                    <span>About</span>
                                  </a>
                                </li>
                                <li>
                                  <Link
                                    onClick={hidenav}
                                    className="nav-link"
                                    smooth={true}
                                    to="#services"
                                  >
                                    <span>Services</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={hidenav}
                                    className="nav-link"
                                    smooth={true}
                                    to="/blogs"
                                  >
                                    <span>Press</span>
                                  </Link>
                                </li>
                                <li>
                                  <a
                                    onClick={hidenav}
                                    className="nav-link"
                                    smooth={true}
                                    href="/contact"
                                  >
                                    <span>Contact</span>
                                  </a>
                                </li>
                              </ul>
                              <div className="navsocialmob">
                                <a
                                  href="https://www.facebook.com/constantineprandcommunications/"
                                  className=""
                                >
                                  Facebook
                                </a>
                                <a
                                  href="https://instagram.com/constantinepr?igshid=YmMyMTA2M2Y="
                                  className=""
                                >
                                  Instagram
                                </a>
                                {/* <a href="" className="">Twitter</a> */}
                                <a
                                  href="https://www.linkedin.com/company/constantine-pr-communications/"
                                  className=""
                                >
                                  Linkedin
                                </a>
                              </div>
                            </div>
                          </div>
                        </Nav>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
              ))}
              <div className="container-fluid">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item news" role="presentation">
                    <h5 className="newsheading">News </h5>
                    <span className="line"></span>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      All
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Press
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Events
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#talks"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Talks
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#everythingelse"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Everything Else
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-4" data-aos="fade-up">
                          <div className="card card-a" data-lag="0.5">
                            <img
                              effect="blur"
                              className="card-img-top"
                              src={"./assets/images/MFC.png"}
                              alt="Card image cap"
                            />
                            <div className="card-body">
                              <h3 className="card-title hover-1">
                                PMIC Rebranding
                              </h3>
                              <h5 className="card-text">
                                Our latest success story? PMIC, of course! With
                                our talented in-house team of corporate branding
                                and design experts, we've been crushing it in
                                the corporate branding, social media & PR game
                                for PMIC. From stunning visuals to engaging
                                content, we've got it all covered.
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up">
                          <div className="card card-b" data-lag="0.3">
                            <img
                              effect="blur"
                              className="card-img-top"
                              src={"./assets/images/avalon.png"}
                              alt="Card image cap"
                            />
                            <div className="card-body">
                              <h3 className="card-title hover-1">
                                Launch Event Avalon City
                              </h3>
                              <h5 className="card-text">
                                As experts in event management, we provided
                                top-notch services for the official launch of
                                Avalon City. From setting the perfect theme to
                                arranging the site, we made sure every detail
                                was on point. Our goal was to put this project
                                on the map, and we did just that with our
                                all-round management services!
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up">
                          <div className="card card-c" data-lag="0.1">
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="back-video"
                            >
                              <source
                                src={"./assets/videos/howdy.mp4"}
                                type="video/mp4"
                              />
                            </video>
                            <div className="card-body">
                              <h3 className="card-title hover-1">
                                Howdy Social Media
                              </h3>
                              <h5 className="card-text">
                                Yee-haw! Howdy, partner! When this food brand
                                came to us, it was lost in the wilds of
                                Islamabad's food market. But we wrangled it up
                                and gave it a spiffy new identity that got
                                everyone talking!
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up">
                          <div className="card card-c" data-lag="0.5">
                            <img
                              effect="blur"
                              className="card-img-top"
                              src={"./assets/images/Medikay.png"}
                              alt="Card image cap"
                            />
                            <div className="card-body">
                              <h3 className="card-title hover-1">
                                Medikay Social Media
                              </h3>
                              <h5 className="card-text">
                                We provided unparalleled brand building,
                                creative designing, digital marketing, video
                                production, and all other related services to
                                this client from the very start. Today, Medikay
                                stands tall as a symbol of our commitment to
                                excellence and dedication to our
                                clients' success.
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up">
                          <div className="card card-c" data-lag="0.3">
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="back-video"
                            >
                              <source
                                src={"./assets/videos/quoteleads.mp4"}
                                type="video/mp4"
                              />
                            </video>
                            <div className="card-body">
                              <h3 className="card-title hover-1">
                                QuotedLeads Rebranding
                              </h3>
                              <h5 className="card-text">
                                Quoted Leads is one of the latest beneficiaries
                                of our magic touch! From digital marketing to
                                social media management, and all things creative
                                – we put it all into action to make Quoted Leads
                                stand out from the competition!
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up">
                          <div className="card card-c" data-lag="0.1">
                            <img
                              effect="blur"
                              className="card-img-top"
                              src={"./assets/images/morenocard.png"}
                              alt="Card image cap"
                            />
                            <div className="card-body">
                              <h3 className="card-title hover-1">
                                Moreno Enclave Branding
                              </h3>
                              <h5 className="card-text">
                                We crafted stunning logo designs and provided
                                Moreno Holdings with all-round creative services
                                to help them stand out in the market. But that's
                                not all, we also managed their events with
                                precision and flair, and our PR services made
                                them the ‘talk of the town’!
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up">
                          <div className="card card-c" data-lag="0.5">
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="back-video "
                            >
                              <source
                                src={"./assets/videos/Pubg.mp4"}
                                type="video/mp4"
                              />
                            </video>
                            <div className="card-body">
                              <h3 className="card-title hover-1">
                                PUBG Mobile Social Media
                              </h3>
                              <h5 className="card-text">
                                When PUBG, the world's most successful gaming
                                platform, approached us for its social media
                                management in Pakistan, we were thrilled! Our
                                creative design and copywriting team quickly got
                                to work, devising engaging social media content
                                and creatives that kept PUBG's fans and gamers
                                engaged and excited about their favorite game.
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up">
                          <div className="card card-c" data-lag="0.3">
                            <img
                              effect="blur"
                              className="card-img-top"
                              src={"./assets/images/RMS.png"}
                              alt="Card image cap"
                            />
                            <div className="card-body">
                              <h3 className="card-title hover-1">
                                RMS Global Rebranding
                              </h3>
                              <h5 className="card-text">
                                With creative branding strategies, lead
                                generation techniques, digital marketing, and
                                social media management services, we have been
                                providing impeccable support to RMS.
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up">
                          <div className="card card-c" data-lag="0.3">
                            <img
                              effect="blur"
                              className="card-img-top"
                              src={"./assets/images/Honey Buns.jpg"}
                              alt="Card image cap"
                            />
                            <div className="card-body">
                              <h3 className="card-title hover-1">
                                HoneyMunch Designing
                              </h3>
                              <h5 className="card-text">
                                Creating killer brand identities is our jam and
                                boy do we rock it! Just take a gander at Honey
                                Munch, one of the many brands we've slayed with
                                our epic branding skills. The client came to us
                                with a mere inkling of an idea and we, being the
                                branding geniuses that we are, designed a
                                completely original visual and market identity.
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  ></div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    ...
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Allblogs;
