import React, { useEffect } from "react";
import Owldemo1 from "./landingSlider";
import Navcomponent from './navbar';
import Blogs from './blogs';
import Ourteam from './ourTeam';
import Footer from "./footer";
import About from './about';
import Servicesnewtest from "./servicenewtest";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Aboutmore } from "./aboutmore";
import AllProjects from './allproects';
import { SliderScroll } from './sliderScroll';

const Home = () => {
    useEffect(() => {
        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            smoothTouch: 0.1,
            effects: true,
        });
        // smoother.effects('.parentIneerParalax', {speed: "auto"})
        var backtoTop = document.getElementById("back-to-top");
        window.addEventListener("scroll", function () {
            if (window.scrollY > 20) {
                backtoTop.classList.add('active')
            }
            else {
                backtoTop.classList.remove('active')
            }
            backtoTop.style.transform = "rotate(" + window.pageYOffset + "deg)";
        })
        var stampImg = document.getElementById("stampimage");
        window.addEventListener("scroll", function () {
            stampImg.style.transform = "rotate(" + window.pageYOffset + "deg)";
        })
    }, [])

    return (
        <>
            <a id="back-to-top" href="#" className="back-to-top" role="button"><p className="scrollbtnp">Up</p></a>
            <div className="smooth-wrapper" id="smooth-wrapper">
                <div id="smooth-content">
                    <Navcomponent />
                    <Owldemo1 />
                    <Servicesnewtest />
                    <About />
                    <Aboutmore />
                    <AllProjects />
                    <Ourteam />
                    <Blogs />
                    <Footer />
                  
                </div>
            </div>
        </>
    )
}

export default Home