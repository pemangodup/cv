import { useState } from 'react';
import './Heading.css';

function Heading() {
  const [style, setStyle] = useState(true);
  const toggle = () => {
    setStyle(!style);
  };
  return (
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
            <a href="#experience" className="li">
              Experiences
            </a>
          </li>
          <li className="li">
            <a href="#contact" className="li">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Heading;
