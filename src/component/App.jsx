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

  const personDetails = [
    { h: 'Age', e: '28' },
    { h: 'Email', e: 'pngodup123@getDefaultNormalizer.com' },
    { h: 'Phone', e: '920090988' },
    { h: 'Age', e: '28' },
    { h: 'Email', e: 'pngodup123@getDefaultNormalizer.com' },
    { h: 'Phone', e: '920090988' },
  ];
  return (
    <div className="main-container">
      <section className="heading-container">
        {/* This is my top container with image and button */}
        <div className="top-header">
          <a href="#home">
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
            <li className="li">
              <a href="#about" className="li">
                About
              </a>
            </li>
            <li className="li">
              <a href="#about" className="li">
                Services
              </a>
            </li>
            <li className="li">
              <a href="#about" className="li">
                Skills
              </a>
            </li>
            <li className="li">
              <a href="#about" className="li">
                Portfolio
              </a>
            </li>
            <li className="li">
              <a href="#about" className="li">
                Experiences
              </a>
            </li>
            <li className="li">
              <a href="#about" className="li">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="body-container">
        {/* FIRST CONTAINER INSIDE BODY SECTION "HOME CONTAINER" */}
        <div className="home-container" id="home">
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
          </div>
        </div>
        {/* end of home container */}
        {/* SECOND CONTAINER INSIDE BODY SECTION "ABOUT CONTAINER" */}
        <div className="about-container" id="about">
          <div className="about-container-detail">
            <div className="about-subject">Hello! I am Pema Ngodup</div>
            <div className="about-person">
              I am passionate about UI/UX design and Web Design. I am a skilled
              front-end developer and master of graphic design tools such as
              Photoshop and Sketch. I am a quick learner and a team worker that
              gets the job done. I can easily capitalize on low hanging fruits
              and quickly maximize timely deliverables for real-time schemas.
            </div>
            <div className="about-details">
              {personDetails.map((deta) => {
                return (
                  <div className="straight-line">
                    <div className="label">{deta.h}:</div>
                    <div className="detail">{deta.e}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="about-image">
            <img
              className="responsive-pic"
              src="https://media.licdn.com/dms/image/C5603AQHRv-dTiZ9xOA/profile-displayphoto-shrink_800_800/0/1625419846609?e=1678320000&v=beta&t=zwm8vLbwZgeuqHab66Cm6h75zXTug7Fyi08lHVFFs4E"
              alt="profile.jpg"
            />
          </div>
        </div>
        {/* End of about container */}
        {/* THIRD CONTAINER INSIDE BODY SECTION "EXPERIENCES CONTAINER" */}
        <div className="experiences-container" id="experiences">
          <div className="top-part-experiences">Experiences</div>
          <div className="bottom-part-experiences">
            {personDetails.map((h) => {
              return (
                <div className="card">
                  <div className="card-upper">
                    <div className="left-side-card-upper">
                      <div className="sub">Web Design</div>
                      <div className="company-date">
                        Webbie LLC. (2018-2020)
                      </div>
                    </div>
                    <div className="right-side-card-upper">
                      <img
                        className="icon-img"
                        src="https://demo.templateflip.com/super/images/services/web-design.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card-below">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iusto a error nostrum quae aut aperiam repudiandae ea
                    consectetur sed dolorem eius eligendi optio vitae porro
                    omnis, quaerat impedit expedita doloribus?
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* End of experience container */}
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
