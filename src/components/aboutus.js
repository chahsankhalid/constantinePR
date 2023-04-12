import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import Navcomponent from "./navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HashLink as Link } from "react-router-hash-link";
import Button from "react-bootstrap/Button";
import Ourteam from "./ourTeam";
import { gsap } from "gsap";
import $ from "jquery";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Footer from "./footer";

const Aboutus = () => {
  useEffect(() => {
    // ScrollSmoother.create({
    //   wrapper: "#smooth-wrapper",
    //   content: "#smooth-content",
    //   smooth: 2,
    //   smoothTouch: 0.1,
    //   // effects: true,
    // });
    ScrollTrigger.create({
      trigger: "#aboutussectionmain",
      start: "top top",
      // end: 'top center',
      // end: "bottom 99%",
      endTrigger: "#aboutussectionmain",
      markers: false,
      scrub: 1,
      onEnter: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#ffffff" });
      },
      onLeave: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#000000" });
      },
      onEnterBack: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#ffffff" });
      },
      onLeaveBack: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#ffffff" });
      },
    });
    // var backtoTop = document.getElementById("back-to-top");
    // window.addEventListener("scroll", function () {
    //   if (window.scrollY > 4100) {
    //     backtoTop.classList.add("active");
    //   } else {
    //     backtoTop.classList.remove("active");
    //   }
    //   backtoTop.style.transform = "rotate(" + window.pageYOffset + "deg)";
    // });
  }, []);
  return (
    <m.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <>
        <div className="smooth-wrapper" id="smooth-wrapper">
          <div id="smooth-content">
            <section id="aboutussectionmain">
            <Navcomponent />
              <div className="container-fluid aboutuscontainer">
                <div className="row">
                  <div className="about_heading">
                    <h1 className="aboutmoretext">From Concept to Reality:</h1>
                    <h1 className="aboutmoretext">
                      We Bring Your Ideas & Vision to Life!
                    </h1>
                  </div>
                  <div className="col-md-6">
                    <div className="aboutimg1">
                      <img
                        className="about-img"
                        src={"./assets/images/aboutimg1.png"}
                        alt="About img"
                      />
                    </div>
                    <div className="aboutcontent2">
                      <h4>
                        What We{" "}
                        <span>
                          {" "}
                          <img
                            className="long-arrow"
                            src={"./assets/images/longarrow.svg"}
                            alt="Long arrow"
                          />
                        </span>{" "}
                        Do?
                      </h4>
                      <br />
                      <p>
                        Our team is stacked with the best talent in the field.
                        We've got social media gurus, marketing wizards, and
                        branding geniuses all under one roof. We know how to
                        create a business, and we're not afraid to get a little
                        wild to make it happen.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="aboutcontent1">
                      <h4>About Us</h4>
                      <br />
                      <p>
                        We're the coolest and fast PR company out there, and
                        we're here to change the game.
                        <br />
                        <br />
                        We've got our finger on the pulse of what's hot, what's
                        not, and everything in between. We're always ahead of
                        the curve, keeping up with the latest trends and styles.
                        We know how to make things go viral, and we're not
                        afraid to take risks to get our clients the attention
                        they deserve.
                      </p>
                    </div>
                    <div className="aboutimg2">
                      <img
                        className="about-img"
                        src={"./assets/images/aboutimg2.png"}
                        alt="About img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="aboutus_2ndheading">
                    <h1>Transforming Conversations into</h1>
                    <h1> Memorable Experiences</h1>
                    <h1>That Inspire Actions</h1>
                  </div>
                  <div className="aboutvideo">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="back-video "
                    >
                      <source
                        src={"./assets/videos/inspire-action.mp4"}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </section>
            <section id="aboutussectionsecond">
              <div className="container-fluid">
                <div className="aboutus_2ndheading aboutus_2ndheadingsecond">
                  <h1>But don't just take our word for it.</h1>
                  <p>
                    Our clients speak for themselves. We've worked with some of
                    the biggest names in the industry, from gaming to film
                    industry to tech. We've helped launch careers and elevate
                    brands to the next level.
                  </p>
                </div>
                <div className="row">
                  <div className="aboutinspiration_heading">
                    <h1>Constantine PR: Where Innovation,</h1>
                    <h1>Leadership, Imagination, and</h1>
                    <h1>Adaptability Reign Supreme!</h1>
                  </div>
                  <div className="aboutinspiration_headingmob">
                    <h1>Constantine PR: Where Innovation, Leadership, Imagination, and Adaptability Reign Supreme!</h1>
                  </div>
                  <div className="col-md-6">
                    <div className="aboutinspirationimgdiv">
                      <img
                        src={"./assets/images/cprlion.png"}
                        className="cprlion"
                        alt="CPR"
                      />
                    </div>
                    <div className="cprbadge">Constantine PR ®</div>
                  </div>
                  <div className="col-md-6">
                    <div className="inpiration-heading">
                      <h3>Our Inspiration</h3>
                      <br />
                      <p>
                        Our name was inspired by Constantine the Great, one of
                        the most celebrated emperors in history, and the founder
                        of what was once the greatest city in the world -
                        Constantinople.
                        <br />
                        <br />
                        Throughout his reign, Emperor Constantine embodied
                        leadership, innovation, tolerance, and adaptability.
                        <br />
                        <br />
                        These principles are fundamental to the way we operate
                        here at Constantine. Our team is deeply committed to
                        upholding these values in everything we do, be it a
                        digital media campaign or a marketing event to
                        everything in between.
                        <br />
                        <br />
                        At Constantine PR, we strive to deliver our services
                        with the same level of strategic excellence that
                        Constantine himself exemplified.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row pad10">
                  <div className="col-md-6">
                    <div className="inpiration-heading">
                      <h3>Who We Are</h3>
                      <br />
                      <p>
                        As an unconventional advertising agency, we at
                        Constantine are dedicated to converting ideas into great
                        brands!
                        <br />
                        <br />
                        We help businesses achieve their digital media marketing
                        and branding image goals through innovative and
                        effective marketing strategies.
                        <br />
                        <br />
                        With offices in Islamabad, Dubai, Morocco, and other
                        parts of the world, we are uniquely positioned to offer
                        our clients a truly comprehensive 360-degree solution,
                        from initial conception and development to the official
                        launch and beyond.
                        <br />
                        <br />
                        Whether you need help with branding, digital marketing,
                        social media presence, event management and everything
                        in between, we are here to support you every
                        step of the way.
                      </p>
                    </div>
                    <Link to="/contact" className="talkbtntocontact">
                      <Button
                        variant="outline-secondary"
                        className="talkbtnmission"
                      >
                        Let's Work Together
                      </Button>{" "}
                    </Link>
                  </div>
                  <div className="col-md-6 paddinrightnone">
                    <div className="aboutinspirationimgdiv">
                      <img
                        src={"./assets/images/whoweare.png"}
                        className="whoweare"
                        alt="Who we are"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="aboutcover"></section>
            <Ourteam />
            <section id="atCPR">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="atcpr-img3"
                      src={"./assets/images/atCpr1.png"}
                      alt="At CPR"
                    />
                    <img
                      className="atcpr-img"
                      src={"./assets/images/atCpr2.png"}
                      alt="At CPR"
                    />
                    <img
                      className="atcpr-img2"
                      src={"./assets/images/atCpr3.png"}
                      alt="At CPR"
                    />
                  </div>
                  <div className="col-md-6 margin-auto">
                    <div className="atcpr-content">
                      <div className="inpiration-heading">
                        <h2 className="atcprheading">
                          At Constantine PR & Communications
                        </h2>
                        <br />
                        <p>
                          We don't just think outside the box, we obliterate it.
                          We're a new breed of badass communicators, and we're
                          here to shake things up. So if you want to get
                          noticed, if you want to be the next big thing, then
                          you know who to call.
                        </p>
                      </div>
                      <Link to="/contact" className="talkbtntocontact">
                        <Button
                          variant="outline-secondary"
                          className="talkbtnmission"
                        >
                          Let's Work Together
                        </Button>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      </>
    </m.div>
  );
};

export default Aboutus;
