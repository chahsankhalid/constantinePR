import React from "react";
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsWhatsapp } from 'react-icons/bs';
import { HashLink as Link } from 'react-router-hash-link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import $ from 'jquery'

const Navcomponent = () => {
    const hidenav = () => {
        document.body.style.overflow = 'visible';
        const check = document.querySelector('.offcanvas');
        check.style.opacity = 0
        check.style.zIndex = -1
    }
    useEffect(() => {
        var backtoTop = document.getElementById("back-to-top");
        window.addEventListener("scroll", function () {
            if (window.scrollY > 4100) {
                backtoTop.classList.add('active')
            }
            else {
                backtoTop.classList.remove('active')
            }
            backtoTop.style.transform = "rotate(" + window.pageYOffset + "deg)";
        })

        $(".navbar-toggler").on("click", function () {
            $(".nav-item").toggleClass('animate');
            $(".iconone").toggleClass('active');
            $(".icontwo").toggleClass('active');
            $(".toggletwoicon").toggleClass('active');
            $(".togglefouricon").toggleClass('active');
        });

    }, []);
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3">
                    <Container fluid>
                   <Navbar.Brand href="/"><img src={'./assets/images/mainlogo1.png'} className="logomain" /></Navbar.Brand>
                   <Navbar.Brand href="/"><img src={'./assets/images/mainlogo2.png'} className="logomain1" /></Navbar.Brand>
                        <Link to="/contact" className="talkbtntocontact"><Button variant="outline-secondary" className="talkbtn">Lets Talk</Button>{' '}</Link>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
                            <span className="navbar-toggler-icon1"></span>
                            <span className="navbar-toggler-icon2"></span>
                        </Navbar.Toggle>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="">
                                    <div className="container">
                                        <div className="col-sm-5 float-start mobnavsocialicon">
                                            <div className="c">C /</div>
                                            <div className='navsocial'>
                                                <a href="https://www.facebook.com/constantineprandcommunications/" className="">Facebook</a>
                                                <a href="https://instagram.com/constantinepr?igshid=YmMyMTA2M2Y=" className="">Instagram</a>
                                                {/* <a href="" className="">Twitter</a> */}
                                                <a href="https://www.linkedin.com/company/constantine-pr-communications/" className="">Linkedin</a>
                                            </div>
                                        </div>
                                        <div className="col-sm-5 offset-sm-2 float-end">
                                            <ul>
                                                <li>
                                                    {/* <a onClick={hidenav}
                                                        className="nav-link"
                                                        smooth={true}
                                                        href="/"
                                                    ><span>Home</span>
                                                    </a> */}
                                                    <Link onClick={hidenav}
                                                        className="nav-link"
                                                        smooth={true}
                                                        to="/"
                                                    ><span>Home</span>
                                                    </Link>
                                                </li>
                                                <li onClick={hidenav}>
                                                    <Link data-cursor-stick onmouseover="memberShow(this.id)" onMouseOut="memberHide(this.id)"
                                                        className="nav-link"
                                                        smooth={true}
                                                        to="#news"
                                                    ><span>Work</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link onClick={hidenav}
                                                        className="nav-link"
                                                        smooth={true}
                                                        to="#aboutus"
                                                    ><span>About</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link onClick={hidenav}
                                                        className="nav-link"
                                                        smooth={true}
                                                        to="#services"
                                                    ><span>Services</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link onClick={hidenav}
                                                        className="nav-link"
                                                        smooth={true}
                                                        to="/contact"
                                                    ><span>Contact</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className='navsocialmob'>
                                                <a href="https://www.facebook.com/constantineprandcommunications/" className="">Facebook</a>
                                                <a href="https://instagram.com/constantinepr?igshid=YmMyMTA2M2Y=" className="">Instagram</a>
                                                {/* <a href="" className="">Twitter</a> */}
                                                <a href="https://www.linkedin.com/company/constantine-pr-communications/" className="">Linkedin</a>
                                            </div>
                                        </div>
                                    </div>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Navcomponent;