import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from 'react-awesome-reveal';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faBehance,
} from '@fortawesome/free-brands-svg-icons';
function Home() {
  return (
    <div className="home-container" id="home">
      <div className="pic-container">
        <img
          className="picSize"
          src="https://cdn.dribbble.com/users/926537/screenshots/4502924/python-2.gif"
          // src="https://media.istockphoto.com/id/1241710244/vector/working-at-home-vector-flat-style-illustration-online-career-coworking-space-illustration.jpg?s=612x612&w=0&k=20&c=U34U9zhLBWDEbfPmgmlnFJiP-EuWu7MEUCxUls_BnKU="
          // src="https://demo.templateflip.com/super/images/illustrations/hello3.svg"
          alt=""
        />
      </div>
      <div className="sub-container">
        <Fade direction="up" cascade>
          <div className="hello-text">Hello!</div>
          <div className="name-text">I,m Pema Ngodup</div>
          <div className="profesion-text">Node JS & React JS Developer</div>

          <div>
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

          <button className="btn">
            Get In Touch <FontAwesomeIcon icon="fa-regular fa-arrow-right" />
          </button>
        </Fade>
      </div>
    </div>
  );
}
export default Home;
