import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from './heading/Heading';
import Home from './heading/Home';
import About from './heading/About';
import Experience from './heading/Experience';
import Contact from './heading/Contact';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faBehance,
} from '@fortawesome/free-brands-svg-icons';
const App = () => {
  return (
    <div className="main-container">
      <Heading />
      <section className="body-container">
        <Home />
        <About />
        <Experience />
        <Contact />
      </section>
      {/* End of body section */}
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
            href="https://www.linkedin.com/in/pema-ngodup-529438130/"
          >
            <FontAwesomeIcon className="icon" icon={faTwitter} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/pema-ngodup-529438130/"
          >
            <FontAwesomeIcon className="icon" icon={faFacebook} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/pema-ngodup-529438130/"
          >
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/pema-ngodup-529438130/"
          >
            <FontAwesomeIcon className="icon" icon={faBehance} />
          </a>
        </div>
        <div className="footer-4">&copy;Pema Ngoudp. All Rights Reserved</div>
      </section>
    </div>
  );
};

export default App;
