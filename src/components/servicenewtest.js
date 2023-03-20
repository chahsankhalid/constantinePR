import React, { useState, useEffect, useRef } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const Servicesnewtest = () => {
    const services = useRef(null);

    const [Bgcolor, setBgColor] = useState("");
    const [Listcolor, setListColor] = useState("");

    const bgcolor = {
        backgroundColor: `${Bgcolor}`
    }
    const listcolor = {
        color: `${Listcolor}`
    }

    const showImg = (pic, list1, list2, list3) => {
        pic.classList.add('active')
        list1.style.zIndex = '-2'
        list2.style.zIndex = '-2'
        list3.style.zIndex = '-2'
    }
    const hideImg = (id, list1, list2, list3) => {
        id.classList.remove('active')
        list1.style.zIndex = '1'
        list2.style.zIndex = '1'
        list3.style.zIndex = '1'
    }

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <section id="services" style={bgcolor} ref={services}>
                <div className="servicesparentdiv">
                    {/* <div className='speciality-head'>
                    <MdOutlineSubdirectoryArrowRight className="arrowdown" /> <h3>OUR SPECIALITY</h3>
                </div> */}
                    <div className='services-overlay'></div>
                    <div className='servicelist'>
                        <ul className="menu">
                            <div className='first-twoservice'>
                                <li id="dstrategy" className='listitem'>
                                    <span style={listcolor} className="servicelist " id="strategylist" onMouseOver={() => { showImg(document.getElementById('hoverimgchild'), document.getElementById('weblist'), document.getElementById('eventlist'), document.getElementById('medialist')); setBgColor('#292f24'); setListColor('#d5dbb6') }} onMouseLeave={() => { hideImg(document.getElementById('hoverimgchild'), document.getElementById('weblist'), document.getElementById('eventlist'), document.getElementById('medialist')); setBgColor('#00000000'); setListColor('#ffffff') }}>
                                        Digital Strategy <span className='numbers' id="one">01</span>
                                    </span>
                                    <div className='hover-reveal' id="hoverimg"
                                    //  style={{
                                    //     transform: `translateX(${x})`
                                    // }}
                                    //     ref={ref}
                                    >
                                        <div className='hover_reveal_inner'>
                                            <div className="hoverimgchild hoverimgreveals" id="hoverimgchild" alt="services"></div>
                                        </div>
                                    </div>
                                </li>
                                <span className='serviceline'></span>
                                <li id="Branding" className='listitem'>
                                    <span style={listcolor} className="servicelist" id="brandlist" onMouseOver={() => { showImg(document.getElementById('hoverimgchildbrand'), document.getElementById('weblist'), document.getElementById('digitallist'), document.getElementById('eventlist')); setBgColor('#261f16'); setListColor('#ffdbaf') }} onMouseLeave={() => { hideImg(document.getElementById('hoverimgchildbrand'), document.getElementById('weblist'), document.getElementById('digitallist'), document.getElementById('eventlist')); setBgColor('#00000000'); setListColor('#ffffff') }}>
                                        Branding<span className='numbers' id="two">02</span>
                                    </span>
                                    <div className='hover-reveal' id="hoverimg"
                                    // style={{
                                    //     transform: `translate(${x})`
                                    // }}
                                    //     ref={ref} 
                                    >
                                        <div className='hover_reveal_inner'>
                                            <div className="hoverimgchildbrand hoverimgreveals" id="hoverimgchildbrand" alt="services"></div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div className='thirdservice'>
                                <li id="webapp" className='listitem'>
                                    <span style={listcolor} className="servicelist" id='weblist' onMouseOver={() => { showImg(document.getElementById('hoverimgchildweb'), document.getElementById('strategylist'), document.getElementById('eventlist'), document.getElementById('medialist')); setBgColor('#2c241a'); setListColor('#ffcaa7') }} onMouseLeave={() => { hideImg(document.getElementById('hoverimgchildweb'), document.getElementById('strategylist'), document.getElementById('eventlist'), document.getElementById('medialist')); setBgColor('#00000000'); setListColor('#ffffff') }}>
                                        Web + App Development<span className='numbers' id="three">03</span>
                                    </span> <span className='serviceline'></span>
                                    <div className='hover-reveal' id="hoverimg"
                                    // style={{
                                    //     transform: `translate(${x})`
                                    // }}
                                    // ref={ref}
                                    >
                                        <div className='hover_reveal_inner'>
                                            <div className="hoverimgchildweb hoverimgreveals" id="hoverimgchildweb" alt="services"></div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div className='forth-fifthservice'>
                                <li id="emanagmnt" className='listitem'>
                                    <span style={listcolor} className="servicelist" id='eventlist' onMouseOver={() => { showImg(document.getElementById('hoverimgchildevent'), document.getElementById('weblist'), document.getElementById('medialist'), document.getElementById('strategylist')); setBgColor('#1d0a20'); setListColor('#a78aa7') }} onMouseLeave={() => { hideImg(document.getElementById('hoverimgchildevent'), document.getElementById('weblist'), document.getElementById('medialist'), document.getElementById('strategylist')); setBgColor('#00000000'); setListColor('#ffffff') }}>
                                        Event Management<span className='numbers' id="four">04</span>
                                    </span>
                                    <span className='serviceline'></span>
                                    <div className='hover-reveal' id="hoverimg"
                                    // style={{
                                    //     transform: `translate(${x})`
                                    // }}
                                    // ref={ref}
                                    >
                                        <div className='hover_reveal_inner'>
                                            <div className="hoverimgchildevent hoverimgreveals" id="hoverimgchildevent" alt="services"></div>
                                        </div>
                                    </div>
                                </li>

                                <li id="dmarketing" className='listitem'>
                                    <span style={listcolor} className="servicelist" id="digitallist" onMouseOver={() => { showImg(document.getElementById('hoverimgchilddigital'), document.getElementById('weblist'), document.getElementById('brandlist'), document.getElementById('brandlist')); setBgColor('#181f32'); setListColor('#c1d9ff') }} onMouseLeave={() => { hideImg(document.getElementById('hoverimgchilddigital'), document.getElementById('weblist'), document.getElementById('brandlist'), document.getElementById('brandlist')); setBgColor('#00000000'); setListColor('#ffffff') }}>
                                        Digital Marketing<span className='numbers' id="five">05</span>
                                    </span>
                                    <div className='hover-reveal' id="hoverimg"
                                    // style={{
                                    //     transform: `translate(${x})`
                                    // }}
                                    // ref={ref}
                                    >
                                        <div className='hover_reveal_inner'>
                                            <div className="hoverimgchilddigital hoverimgreveals" id="hoverimgchilddigital" alt="services"></div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <li id="mmanagmnt" className='listitem'>
                                <span style={listcolor} className="servicelist" id="medialist" onMouseOver={() => { showImg(document.getElementById('hoverimgchildmedia'), document.getElementById('eventlist'), document.getElementById('weblist'), document.getElementById('strategylist')); setBgColor('#3b413f'); setListColor('#c5d3d4') }} onMouseLeave={() => { hideImg(document.getElementById('hoverimgchildmedia'), document.getElementById('eventlist'), document.getElementById('weblist'), document.getElementById('strategylist')); setBgColor('#00000000'); setListColor('#ffffff') }}>
                                    Media Production<span className='numbers' id="six">06</span>
                                </span>
                                <div className='hover-reveal' id="hoverimg"
                                // style={{
                                //     transform: `translate(${x})`
                                // }}
                                // ref={ref}
                                >
                                    <div className='hover_reveal_inner'>
                                        <div className="hoverimgchildmedia hoverimgreveals" id="hoverimgchildmedia" alt="services"></div>
                                    </div>
                                </div>
                            </li>

                            {/* <div className='seventhservice'>
                        <li><span className='numbers' id="seven">07</span><span className="servicelist" onMouseOver={() => { moveNumber(document.getElementById('seven')); setBgImg(process.env.PUBLIC_URL + '/assets/images/Public Relation.jfif') }} onMouseOut={() => { movebackNumber(document.getElementById('seven'), document.getElementById('serviceline7')) }}>
                            Public Relations
                        </span></li>
                        </div> */}
                            {/* <li><span className='numbers' id="eight">08</span><span className="servicelist" onMouseOver={() => { moveNumber(document.getElementById('eight')); setBgImg(process.env.PUBLIC_URL + '/assets/images/Brand Strategy.png') }} onMouseOut={() => { movebackNumber(document.getElementById('eight'), document.getElementById('serviceline8')) }}>
                            Brand Strategy
                        </span></li>
                        <li><span className='numbers' id="nine">09</span><span className="servicelist" onMouseOver={() => { moveNumber(document.getElementById('nine')); setBgImg(process.env.PUBLIC_URL + '/assets/images/Creative Communiation.jfif') }} onMouseOut={() => { movebackNumber(document.getElementById('nine'), document.getElementById('serviceline9')) }}>
                            Creative Communication
                        </span></li> */}
                            {/* <div className='hoverimg' id="hoverimg" >
                            <div className='hover_reveal_inner' style={{
                                transform: `translate(${x - width / 2}px, ${y - height /2}px) rotate(${z}deg)`
                            }}      
                                ref={ref} >
                                <img src={Bgimg} className="hoverimgchild" id="hoverimgchild" alt="services" />
                            </div>
                        </div> */}
                        </ul>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Servicesnewtest