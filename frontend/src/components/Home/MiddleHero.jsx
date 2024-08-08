import React from "react";
import './MiddleHero.css';

const MiddleHero = () => {
  return (
    <>
      <div className="middlehero">
        
        <div className="container">
        <div className="image">
            <img src="/hiring.gif" alt="hero" />
          </div>
          <div className="title">
            <h1>Welcome to JobQuest! </h1>
            {/* <h1>your interests and skills</h1> */}
            <p>
            Discover personalized job listings, connect with top employers, and access expert resources to boost your career or find the perfect candidate. Join us today!
            </p>
          </div>
         
        </div>
      </div>
     
      
     
     
    </>
  );
};

export default MiddleHero;