import './Experience.css';
import { Slide } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';
import variable from '../config/config';

function Experience() {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const api = variable.API_URI;
    const response = await fetch(`${api}/experience`);
    const data = await response.json();
    setExperience(data.data);
  }
  return (
    <div className="experiences-container" id="experience">
      <div className="top-part-experiences">Experiences</div>
      <div className="bottom-part-experiences">
        {experience.map((data, index) => {
          return (
            <Slide direction="right" key={index}>
              <div className="card">
                <div className="card-upper">
                  <div className="left-side-card-upper">
                    <div className="sub">{data.jobTitle}</div>
                    <div className="company-date">{data.employerName}</div>
                  </div>
                  {/* <div className="right-side-card-upper">
                    <img className="icon-img" src={data.img} alt="" />
                  </div> */}
                </div>
                <div className="card-below">{data.jobDescription}</div>
              </div>
            </Slide>
          );
        })}
      </div>
    </div>
  );
}
export default Experience;
