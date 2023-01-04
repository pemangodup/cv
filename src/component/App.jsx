import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faBehance,
} from '@fortawesome/free-brands-svg-icons';

const App = () => {
  const [style, setStyle] = useState(true);
  const toggle = () => {
    setStyle(!style);
  };
  return (
    <div className="main-container">
      <section className="heading-container">
        {/* This is my top container with image and button */}
        <div className="top-header">
          <a href="src">
            <img
              className="pro-img"
              src="https://media.licdn.com/dms/image/C5603AQHRv-dTiZ9xOA/profile-displayphoto-shrink_400_400/0/1625419846609?e=1678320000&v=beta&t=0mzdneY0jqO_lv2M3jAw7nZkooBEVj4iWzgju5iKlBw"
              alt=""
            />
          </a>

          <button className="btnIcon" onClick={toggle}>
            |||
          </button>
        </div>
        {/* this is my bottom container with list of menu items */}
        <div className="bottom-header">
          <ul className={style ? 'ul' : 'ul navactive'}>
            <li className="li">About</li>
            <li className="li">Services</li>
            <li className="li">Skills</li>
            <li className="li">Portfolio</li>
            <li className="li">Experiences</li>
            <li className="li">Contact</li>
          </ul>
        </div>
      </section>
      <section className="body-container">
        {/* FIRST CONTAINER INSIDE BODY SECTION "HOME CONTAINER" */}
        <div className="home-container">
          <div className="pic-container">
            <img
              className="picSize"
              src="https://demo.templateflip.com/super/images/illustrations/hello3.svg"
              alt=""
            />
          </div>
          <div className="sub-container">
            <div className="hello-text">Hello!</div>
            <div className="name-text">I,m Pema Ngodup</div>
            <div className="profesion-text">Web Developer</div>
            <div className="icons">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
              <FontAwesomeIcon className="icon" icon={faFacebook} />
              <FontAwesomeIcon className="icon" icon={faInstagram} />
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
              <FontAwesomeIcon className="icon" icon={faBehance} />
            </div>
            <button className="btn">
              Get In Touch <FontAwesomeIcon icon="fa-regular fa-arrow-right" />
            </button>
          </div>
        </div>
        {/* SECOND CONTAINER INSIDE BODY SECTION "ABOUT CONTAINER" */}
        <div className="about-container">
          <div className="about-container-detail">
            <div className="about-subject">Hello! I am Pema Ngodup</div>
            <div className="about-person">
              I am passionate about UI/UX design and Web Design. I am a skilled
              front-end developer and master of graphic design tools such as
              Photoshop and Sketch. I am a quick learner and a team worker that
              gets the job done. I can easily capitalize on low hanging fruits
              and quickly maximize timely deliverables for real-time schemas.
            </div>
            <div className="about-details"></div>
          </div>
          <div className="about-container-image"></div>
        </div>
      </section>
      <section className="footer-container">I am footer.</section>
    </div>
  );
};

export default App;
