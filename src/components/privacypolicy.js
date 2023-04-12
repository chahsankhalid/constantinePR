import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { motion as m } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./footer";

const Privacypolicy = () => {
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
    AOS.init();
  }, []);
  return (
    <>
      <m.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="smooth-wrapper" id="smooth-wrapper">
          <div id="smooth-content">
            <section id="privacypolicy">
              {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3 navemail">
                  <Container fluid>
                    <Navbar.Brand href="/">
                      <img src={"./assets/images/©.png"} className="logomain" alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Brand href="/">
                      <img
                        src={"./assets/images/cpr_ico_white.png"}
                        className="logomain1"
                        alt="logo"
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
                                  <a
                                    onClick={hidenav}
                                    className="nav-link"
                                    smooth={true}
                                    href="/blogs"
                                  >
                                    <span>Press</span>
                                  </a>
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
              <div className="container-fluid nopadding">
                <div className="row privacyrows">
                  <div className="col-md-6">
                    <div className="privacycontent">
                      <h1>Privacy Policy</h1>
                      <p>
                        At Constantine, we take the privacy of our clients and
                        those who
                        <br /> visit our website seriously. This Privacy Policy
                        outlines how we
                        <br /> collect, use, disclose, and protect your personal
                        information.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="animated-emojiodd">
                      <img
                        src={"./assets/images/privacyemoji3.png"}
                        className=""
                        alt="Emoji"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                </div>
                <div className="row privacyrows">
                  <div className="col-md-6">
                    <div className="animated-emojieven">
                      <img
                        src={"./assets/images/privacyemoji2.png"}
                        className=""
                        alt="Emoji"
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="privacycontent">
                      <h1>Information</h1>
                      <h1>Collection and Use</h1>
                      <p>
                        We collect personal information only when you
                        voluntarily provide it to us.
                        <br />
                        <br />
                        This includes, but is not limited to: your name, email
                        address, phone number and/or any other information you
                        provide when you fill up a contract form, engage with
                        our website, or interact with our social media handles.
                        <br />
                        <br />
                        We use this information to communication with you and
                        ensure a seamless provision of our services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row privacyrows">
                  <div className="col-md-6">
                    <div className="privacycontent">
                      <h1>Information</h1>
                      <h1>Disclosure</h1>
                      <p>
                        We neither sell, nor rent your personal information to
                        third parties.
                        <br />
                        <br />
                        We may share your personal information with our partners
                        and/or service providers for the purpose of assistance
                        in providing our services to you.
                        <br />
                        <br />
                        We may also disclose your personal information if we are
                        required to do so by law, or if we believe that such
                        disclosure is necessary to protect our rights, property,
                        or safety, or the rights, property, or safety of others.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="animated-emojiodd">
                      <img
                        src={"./assets/images/privacyemoji3.png"}
                        className=""
                        alt="Emoji"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                </div>
                <div className="row privacyrows">
                  <div className="col-md-6">
                    <div className="animated-emojieven">
                      <img
                        src={"./assets/images/privacyemoji2.png"}
                        className=""
                        alt="Emoji"
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="privacycontent">
                      <h1>Cookies</h1>
                      <p>
                        We use cookies on our website to enhance your browsing
                        experience and provide personalized content.
                        <br />
                        <br />
                        Cookies are small data files that are placed on your
                        device when you visit our website.
                        <br />
                        <br />
                        You can choose to disable cookies in your browser
                        settings, but this may affect your ability to use
                        certain features of our website.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row privacyrows">
                  <div className="col-md-6">
                    <div className="privacycontent">
                      <h1>Security</h1>
                      <p>
                        We take reasonable measures to protect your personal
                        information from unauthorized access, use, or disclosure
                        <br />
                        <br />
                        However, no method of transmission over the Internet or
                        electronic storage is a 100 percent secure.
                        <br />
                        <br />
                        Therefore, while we strive to use commercially
                        acceptable means to protect your personal information,
                        we cannot guarantee its absolute security.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="animated-emojiodd">
                      <img
                        src={"./assets/images/privacyemoji3.png"}
                        className=""
                        alt="Emoji"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                </div>
                <div className="row privacyrows">
                  <div className="col-md-6">
                    <div className="animated-emojieven">
                      <img
                        src={"./assets/images/privacyemoji2.png"}
                        className=""
                        alt="Emoji"
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="privacycontent">
                      <h1>Changes to this</h1>
                      <h1>Privacy Policy</h1>
                      <p>
                        We reserve the right to modify this Privacy Policy at
                        any time.
                        <br />
                        <br />
                        We encourage you to review this Privacy Policy
                        periodically to stay informed about how we are
                        protecting your personal information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </section>
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Privacypolicy;
