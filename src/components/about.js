import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { gsap } from "gsap";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useEffect(() => {
        // ScrollTrigger.matchMedia({
        //     // desktop
        //     "(min-width: 768px)": function () {
        ScrollTrigger.create({
            trigger: '#aboutus',
            start: 'top top',
            // end: 'top center',
            // end: "bottom 99%",
            endTrigger: '#aboutmore',
            markers: false,
            scrub: 1,
            onEnter: () => {
                gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff' })
            },
            onLeave: () => {
                gsap.to('body', { duration: 1.0, backgroundColor: '#000000' })
            },
            onEnterBack: () => {
                gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff' })
            },
            onLeaveBack: () => {
                gsap.to('body', { duration: 1.0, backgroundColor: '#000000' })
            }
        })
        // },
        // "(min-width: 1700px)": function () {
        //     ScrollTrigger.create({
        //         trigger: '#aboutus',
        //         start: 'top top',
        //         // end: 'top center',
        //         // end: "bottom 99%",
        //         endTrigger: '#aboutus',
        //         markers: true,
        //         scrub: 1,
        //         onEnter: () => {
        //             gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff' })
        //             gsap.to(".about-para", {
        //                 duration: 1,
        //                 opacity: 1
        //             });
        //         },
        //         onLeave: () => {
        //             gsap.to('body', { duration: 1.0, backgroundColor: '#000000' })
        //             gsap.to(".about-para", {
        //                 duration: 1,
        //                 opacity: 0
        //             });
        //         },
        //         onEnterBack: () => {
        //             gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff' })
        //             gsap.to(".about-para", {
        //                 duration: 1,
        //                 opacity: 1,
        //             });
        //         },
        //         onLeaveBack: () => {
        //             gsap.to('body', { duration: 1.0, backgroundColor: '#000000' })
        //             gsap.to(".about-para", {
        //                 duration: 1,
        //                 opacity: 0
        //             });
        //         }
        //     })
        // }
        // })
    }, [])

    return (
        <>
         
            <section id="aboutus">
                {/* <div className='speciality-head'>
                    <MdOutlineSubdirectoryArrowRight className="arrowdown" /><h1 className="">ABOUT US</h1>
                    <h2 className="abouttext">MORE THAN AN ADVERTISING AGENCY</h2>
                </div> */}
                {/* <div className="banners banner1">
                    <p>BE PART OF THE ACTUAL COMMUNITY NOT JUST THE AD COMMUNITY BE PART OF THE ACTUAL COMMUNITY NOT JUST THE AD COMMUNITY BE PART OF THE ACTUAL COMMUNITY NOT JUST THE AD COMMUNITY BE PART OF THE ACTUAL COMMUNITY NOT JUST THE AD COMMUNITY</p>
                </div> */}
                {/* <div className="banners banner2">
                    GET OUT OF THE MARKETING ECHO CHAMBER
                </div>
                <div className="banners banner3">
                    DIVERSITY MAKES THE WORK BETTER  DIVERSITY MAKES THE WORK BETT
                </div> */}
                <div className="marquee-w">
                    <div className="marquee">
                        <span>BE PART OF THE ACTUAL <div className="commnity">COMMUNITY</div> NOT JUST THE AD <div className="commnity">COMMUNITY</div></span>
                    </div>
                    <div className="marquee marquee2">
                        <span>BE PART OF THE ACTUAL <div className="commnity">COMMUNITY</div> NOT JUST THE AD <div className="commnity">COMMUNITY</div></span>
                    </div>
                </div>
                <div className="marquee-w2second">
                    <div className="marqueesecond">
                        <span>GET OUT OF THE MARKETING ECHO <div className="commnity">CHAMBER</div>&nbsp;</span>
                    </div>
                    <div className="marqueesecond marqueesecond2">
                        <span>GET OUT OF THE MARKETING ECHO <div className="commnity">CHAMBER</div>&nbsp;</span>
                    </div>
                </div>
                <div className="marquee-w2third">
                    <div className="marqueethird">
                        <span><div className="commnity"> DIVERSITY</div> MAKES THE WORK BETTER  <div className="commnity">DIVERSITY</div> MAKES THE WORK BETTER</span>
                    </div>
                    <div className="marqueethird marqueethird2">
                        <span> <div className="commnity">DIVERSITY</div> MAKES THE WORK BETTER  <div className="commnity">DIVERSITY</div> MAKES THE WORK BETTER</span>
                    </div>
                </div>
            </section>
            <section id="aboutmore">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7">
                            <p className="aboutmoretext">YOUR AUDIENCE HAS MORE CONTROL OF YOUR BRAND THAN AT ANY POINT IN HISTORY</p>
                        </div>
                        <div className="col-md-5" data-aos="fade-left">
                            {/* <img src={'./assets/images/aboutimg.png'} alt='about' className='about-picture' /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About