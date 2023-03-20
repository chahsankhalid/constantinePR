
import React, { useEffect } from 'react';
import MouseFollower from "mouse-follower";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
MouseFollower.registerGSAP(gsap);
let owl_carousel = require('owl.carousel');


window.fn = owl_carousel;
const Owldemo1 = () => {
    useEffect(() => {
        ScrollTrigger.create({
            trigger: '#scrollsection',
            start: 'top top',
            // end: 'top center',
            // end: "bottom 99%",
            endTrigger: '#scrollsection',
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
                gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff' })
            }
        })
    }, [])
    return (
        <>
            <section id="scrollsection" className='carouselsection'>
                <div className="unorthodox">
                    <h1 className='unorthotext1 unorthotexttraform wetranform'><span>We Transform</span> <img src={'./assets/images/turnicon.png'} alt="icon"/> </h1>
                    <h1 className='unorthotext1 unorthotexttest'><span>Ideas Into Digital</span></h1>
                    <h1 className='unorthotext1'><span>Outcomes</span></h1>
                    {/* <h1 className='unorthotext2'>Are We!</h1> */}
                </div>
                <div className='landinganim'>
                    <video autoPlay loop muted playsInline className="back-video ">
                        <source src={'./assets/videos/Landingvideo-1.mp4'} type="video/mp4" />
                    </video>
                </div>
                <div className="about-para">
                    We are an unconventional advertising agency based in Islamabad, Dubai, Morocco, and other parts of the world as well. Starting from initial concept development to official launch, we provide an all-inclusive 360 Degree solution for brands.
                </div>
                <div className='stamp'>
                    <img id="stampimage" className="stampimage" src={'./assets/images/servicetstamo.png'} alt="stamp"/>
                </div>
                {/* <div className='container-fluid'>
                    <OwlCarousel items={1}
                        className="owl-theme"
                        nav={true}
                        dots={false}
                        loop
                        autoplay={false}
                        navText={[
                            "<span class='arrow prev'></span>",
                            "<span class='arrow next'></span>"
                        ]}
                    >
                        <div className='videodiv'>
                            <video autoPlay loop muted playsInline className="back-video">
                                <source src={'./assets/videos/Eighteen Animation-1.mp4'} type="video/mp4" />
                            </video>
                        </div>
                        <div><img className="img" src={'./assets/images/chery-2.jpg'} /></div>
                        <div><img className="img" src={'./assets/images/USAID.jpg'} /></div>
                        <div><img className="img" src={'./assets/images/Body Shop.png'} /></div>
                        <div className='videodiv'>
                            <video autoPlay loop muted playsInline className="back-video">
                                <source src={'./assets/videos/bigo.mp4'} type="video/mp4" />
                            </video>
                        </div>

                        <div><img className="img" src={'./assets/images/British-Council (1).jpg'} /></div>
                        <div><img className="img" src={'./assets/images/moreno.png'} /></div>
                        <div className='videodiv'>
                            <video autoPlay loop muted playsInline className="back-video">
                                <source src={'./assets/videos/slaughter.mp4'} type="video/mp4" />
                            </video>
                        </div>
                        <div><img className="img" src={'./assets/images/PUBG.jpg'} /></div>
                    </OwlCarousel>
                </div> */}
            </section>
        </>
    )
}
export default Owldemo1  