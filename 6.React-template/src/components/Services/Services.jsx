// Services.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Services.scss';
import { faMobile, faPen, faQuestion, faThumbsUp  } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <div className='containerServices'>
      <h3>SERVICES</h3>
      <h2>What We Offer</h2>
      <div className='boxes'>
      <div className='responsive'>
        <button><FontAwesomeIcon icon={faMobile}/></button>
        <div>
          <h4>Responsive</h4>
          <p>Looks great on any screen size!</p>
        </div>
      </div>
      <div className='redesigned'>
        <button><FontAwesomeIcon icon={faPen}/></button>
        <div>
          <h4>Redesigned</h4>
          <p>Freshly redesigned for Bootstrap 5.</p>
        </div>
      </div>
      <div className='favorited'>
        <button><FontAwesomeIcon icon={faThumbsUp} /></button>
        <div>
          <h4>Favorited</h4>
          <p>Millions of users Start Bootstrap!</p>
        </div>
      </div>
      <div className='question'>
        <button><FontAwesomeIcon icon={faQuestion} /></button>
        <div>
          <h4>Question</h4>
          <p>I mustache you a question...</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Services;
