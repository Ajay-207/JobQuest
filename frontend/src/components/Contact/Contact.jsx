import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css';
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Contact() {
    return (
        <>
            <div>
                <nav>
                    <div className="home_nav">
                        <img className="logo" src="/logo-png.png" alt="logo" />
                        <ul className="list">
                            <li>
                                <Link to="/" onClick={() => setShow(false)}>
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={() => setShow(false)}>
                                    About
                                </Link>
                            </li>
                            <Link to="/login" onClick={() => setShow(false)}>
                                <button className="Login_btn">Login/Signup</button>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>



            <div className="MainHero">
                <div className="container">
                    <div className="title">
                        <div>
                            <Link to={"https://www.facebook.com/ajay.kamar.716970"} target="_blank">
                            Facebook:

                                <FaFacebookF />
                            </Link>
                            <br />
                            YouTube
                            <Link to={"https://www.youtube.com/channel/UCMZ6lh2Ta_9_vX-OQx7kpDg"} target="_blank">
                                <FaYoutube />
                            </Link>
                            <br />
                            Linkedin
                            <Link to={"https://www.linkedin.com/in/ajay-kumar-701872252/"} target="_blank">
                                <FaLinkedin />
                            </Link>
                            <br />
                            Instagram
                            <Link to={"https://www.instagram.com/ajay.mathur.14/"} target="_blank">
                                <RiInstagramFill />
                            </Link>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/contact_us.jpg" alt="hero" />
                    </div>
                </div>
            </div>



        </>
    )
}

export default Contact
