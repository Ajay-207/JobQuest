import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import './HowItWorks.css';
import { Link } from "react-router-dom";


const HowItWorks = () => {
  return (
    <>


    
      <div className="howitworks">
        <div className="container">
          <h3>How JobQuest Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <Link to="/register"><p>Create Account</p></Link>
           
              <p>
                Start your journey to finding the perfect job by creating an account with us. It's quick, easy, and gives you access to a world of career opportunities.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Welcome to our platform, where job seekers and employers connect to achieve their career and hiring goals. Whether you're looking for your next career opportunity or searching for the ideal candidate to join your team, we are here to help.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Welcome to our platform, the ultimate destination for job seekers and employers. Whether you're aiming to land your dream job or looking to recruit the perfect candidate, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;