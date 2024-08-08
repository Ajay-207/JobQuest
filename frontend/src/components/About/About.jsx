import React from 'react'
import { Link } from "react-router-dom";
import './About.css';

function About() {
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
                                <Link to="/contact" onClick={() => setShow(false)}>
                                    CONTACT US
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
                        <h1>About Us</h1>
                        {/* <h1>your interests and skills</h1> */}
                        <p>
                            Welcome to JobQuest, the ultimate platform designed to bridge the gap between talented job seekers and forward-thinking employers. Whether you're looking for your dream job or seeking top-tier talent, JobQuest is here to help you achieve your goals.
                        </p>
                    </div>
                    <div className="image">
                        <img src="/about-us.png" alt="hero" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default About
