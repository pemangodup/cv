import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from './heading/Heading';
import Home from './heading/Home';
import About from './heading/About';
import Experience from './heading/Experience';
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
        <div className="contact-container" id="contact">
          <div className="upper-contact-container">Contact Me</div>
          <div className="lower-contact-container">
            <div className="contact-form">
              <form action="" method="post">
                <label htmlFor="">Name</label>
                <br />
                <input type="text" />
                <br />
                <label htmlFor="">Email</label>
                <br />
                <input type="email" />
                <br />
                <label htmlFor="">Message</label>
                <br />
                <textarea name="" id="" cols="30" rows="12"></textarea>
                <button className="send-button">Send</button>
              </form>
            </div>
            <div className="contact-detail">
              <div className="contact-sub">Let's talk how I can help you!</div>
              <div className="contact-message">
                If you like my work and want to avail my services then drop me a
                message using the contact form. Or get in touch using my email,
                skype or my contact number. See you!
              </div>
              <div className="contact-sub-detail">
                <div className="yeta">Email:</div>
                <div className="uta">pngodup123@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
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
