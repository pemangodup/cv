import img from '../img/pema.jpg';
import './About.css';
import { Slide } from 'react-awesome-reveal';
import database from '../data/database';
import { useEffect, useState } from 'react';
function About() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await fetch('http://localhost:5000/v1/cv/api/about');
    const data = await response.json();
    setData(data.data[0]);
  }
  return (
    <div className="about-container" id="about">
      <div className="about-container-detail">
        <Slide>
          <div className="about-subject">{data.subject}</div>
          <div className="about-person">{data.aboutPerson}</div>
          <div className="about-details">
            {database.personDetails.map((deta, index) => {
              return (
                <div className="straight-line" key={index}>
                  <div className="label">{deta.h}:</div>
                  <div className="detail">{deta.e}</div>
                </div>
              );
            })}
          </div>
        </Slide>
      </div>
      <div className="about-image">
        <Slide direction="right">
          <img
            className="responsive-pic"
            src={img}
            // src="https://media.licdn.com/dms/image/C5603AQHRv-dTiZ9xOA/profile-displayphoto-shrink_800_800/0/1625419846609?e=1678320000&v=beta&t=zwm8vLbwZgeuqHab66Cm6h75zXTug7Fyi08lHVFFs4E"
            alt="profile.jpg"
          />
        </Slide>
      </div>
    </div>
  );
}
export default About;
