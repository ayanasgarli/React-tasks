import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
    <div className="footer">
      <button className="footer-button" style={{ backgroundColor: '#1D809F', color: 'white' }}>
        <FontAwesomeIcon icon={faFacebookF} />
      </button>
      <button className="footer-button" style={{ backgroundColor: '#1D809F', color: 'white' }}>
        <FontAwesomeIcon icon={faTwitter} />
      </button>
      <button className="footer-button" style={{ backgroundColor: '#1D809F', color: 'white' }}>
        <FontAwesomeIcon icon={faGithub} />
      </button>
    </div>
    <p className="copyright">Copyright © Your Website 2023</p>
    </>
  );
}

export default Footer;
