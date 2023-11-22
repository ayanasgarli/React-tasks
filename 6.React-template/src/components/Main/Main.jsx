// StylishPortfolio.js
import React from 'react';
import './Main.scss'; 

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="background-image">
          <div className="text-overlay">
            <h2>Welcome to <i>your</i> <br /> next website!</h2>
            <button className="btn">Download Now!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
