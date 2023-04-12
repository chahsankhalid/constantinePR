import "./index.css";
import "./mediaQueries.css";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import Email from "./components/email";
import { AnimatePresence } from "framer-motion";
import jQuery from "jquery";
import Allblogs from "./components/allblogs";
import { Helmet } from "react-helmet";
import Aboutus from "./components/aboutus";
import Termsandconditions from "./components/terms&conditions";
import Privacypolicy from "./components/privacypolicy";
import { ScrollSmoother } from "gsap/ScrollSmoother";
MouseFollower.registerGSAP(gsap);

function App() {
  // const [loading, setLoading] = useState(true)
  const location = useLocation();
  const spinner = document.getElementById("pre-loader");

  const cursor = new MouseFollower();
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      smoothTouch: 0.1,
      effects: true,
  });

    const elements1 = document.querySelectorAll(".card-img-top");
    elements1.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.setText("");
      });
      element.addEventListener("mouseleave", () => {
        cursor.removeText();
      });
    });
  });
  var backtoTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 4100) {
        backtoTop.classList.add("active");
      } else {
        backtoTop.classList.remove("active");
      }
      backtoTop.style.transform = "rotate(" + window.pageYOffset + "deg)";
    });
  // if (spinner) {
  jQuery(document).ready(function () {
    setTimeout(() => {
      jQuery(spinner).slideUp(1200);
    }, 1000);
    // setLoading(false)
  });
  // setTimeout(() => {
  // spinner.style.display = 'none'
  // setLoading(false)
  // }, 3000)
  // }

  // var cursor = document.querySelector('.cursor');

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
      <Helmet>
        <title>Constantine-Pr</title>
        <meta name="description" content="Get info about ConstantinePR" />
        <meta name="keywords" content="digital marketing agency, digital marketing agency pakistan, digital advertising agency, digital advertising agencies near me, branding agencies, branding and marketing agency, digital strategy, web development, app development, media production, event management, rebranding, brand management, social media marketing, corporate branding, corporate marketing strategy, print media, digital media        "/>
      </Helmet>
        {/* <Routes> */}
        <a id="back-to-top" href="#" className="back-to-top" role="button">
          <p className="scrollbtnp">Up</p>
        </a>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Email />} />
          <Route path="/work" element={<Allblogs />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/terms&conditions" element={<Termsandconditions />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          {/* </AnimatePresence> */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}
export default App;
