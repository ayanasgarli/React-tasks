import React from 'react';
import './Project.scss';

function Project() {
  return (
    <div className='containerProject'>
      <h3>PORTFOLIO</h3>
      <h2>Recent Projects</h2>
      <div className='cards'>
        <div className='stationary'>
            <h6> <strong> STATIONARY</strong></h6>
            <p>A yellow pencil with envelopes on a clean, blue backdrop!</p>
        </div>
        <div className='icecream'>
            <h6>ICE CREAM</h6>
            <p>A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
        </div>
        <div className='strawberries'>
            <h6>STRAWBERRIES</h6>
            <p>Strawberries are such a tasty snack, especially with a little sugar on top!</p>
        </div>
        <div className='workspace'>
            <h6>WORKSPACE</h6>
            <p>A yellow workspace with some scissors, pencils and other objects.</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
