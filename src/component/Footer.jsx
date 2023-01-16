import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer-1">Pema Ngodup</div>
      <div className="footer-2">Node JS & React JS Developer</div>
      <div className="footer-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/pema-ngodup-529438130/"
        >
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/PNgodup"
        >
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/profile.php?id=100044281442343"
        >
          <FontAwesomeIcon className="icon" icon={faFacebook} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/"
        >
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </a>
      </div>
      <div className="footer-4">&copy;Pema Ngoudp. All Rights Reserved</div>
    </section>
  );
};
export default Footer;
