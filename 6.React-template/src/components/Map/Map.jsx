import React from 'react'
import './Map.scss'

function Map() {
  return (
    <>
    <div className='containerMap'>
        <h2>The buttons below are impossible to resist...</h2>
        <div>
        <button>Click Me!</button>
        <button className='look'>Look At Me!</button>
        </div>
    </div>
    
    <div className="google-map-iframe">
        <iframe
          title="Embedded Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.748317880382!2d49.81287087575337!3d40.3701046584762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc397d94dc3%3A0x617bc46b47244c00!2sAz%C9%99rbaycan%20Texniki%20Universiteti!5e0!3m2!1saz!2saz!4v1700605810544!5m2!1saz!2saz"
          width="100%"
          height="500px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  )
}

export default Map