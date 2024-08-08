import React from "react";

import './MainHero.css';

const MainHero = () => {
  return (
    <>
      <div className="MainHero">
        <div className="container">
          <div className="title">
            <h1>Welcome to JobQuest! </h1>
            {/* <h1>your interests and skills</h1> */}
            <p>
            Discover personalized job listings, connect with top employers, and access expert resources to boost your career or find the perfect candidate. Join us today!
            </p>
          </div>
          <div className="image">
            <img src="/Job_Search.gif" alt="hero" />
          </div>
        </div>
      </div>
     
      <div className="MainHero">
        <div className="container">
          
          <div className="image">
            <img src="/hiring.gif" alt="hero" />
          </div>

          <div className="title">
            <h1>Discover Your Dream Job with JobQuest!</h1>
            {/* <h1>your interests and skills</h1> */}
            <p>
            Looking for talented and passionate individuals to join our dynamic team. Apply now and be part of our exciting journey!            </p>
          </div>
        </div>
      </div>
     
      
     
     
    </>
  );
};

export default MainHero;