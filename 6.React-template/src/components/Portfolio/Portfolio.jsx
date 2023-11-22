// StylishPortfolio.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Portfolio.scss'; 

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <div className="background-image">
          <div className="text-overlay">
            <h1>Stylish Portfolio</h1>
            <h3><strong> <i>A Free Bootstrap Theme by Start Bootstrap</i> </strong></h3>
            <button className="btn">Find out more</button>
            <button className="menu-button">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>
      <div className="middle-content">
        <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
        <p>
          This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at
          <a href="#"> <u>Unsplash</u></a>!
        </p>
        <button>What we offer</button>
      </div>
    </>
  );
};

export default Portfolio;
