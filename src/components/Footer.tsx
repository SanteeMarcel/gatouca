import React from 'react';
import footerCatSilhouette from '../assets/about/purple-head.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import emailIcon from '../assets/email-icon.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content main-content">
        <div className="footer-cat-container">
          <img src={footerCatSilhouette} alt="Gatouca Footer Cat" className="footer-cat-svg" />
        </div>
        <div className="contact-info">
          <h3 className="contact-title">Contato</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="mailto:contato@gatouca.com">
              <img src={emailIcon} alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
