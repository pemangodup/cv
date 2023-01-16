import './Education.css';
import { Slide } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';
function Education() {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await fetch('http://localhost:5000/v1/cv/api/experience');
    const data = await response.json();
    setExperience(data.data);
  }
  return (
    <div className="education-container" id="education">
      <div className="top-part-education">Education</div>
      <div className="bottom-part-education">
        {experience.map((data, index) => {
          return (
            <Slide direction="left" key={index}>
              <div className="card-education">
                <div className="card-upper-education">
                  <div className="left-side-card-upper-education">
                    <div className="sub">B Sc. (Hons) Computer Science </div>
                    <div className="company-date">Herald College Kathmandu</div>
                  </div>
                </div>
                <div className="card-below-education">
                  <div className="educationDegree">
                    Address: Bhagwati Marg, naxal, Kathmandu, Nepal
                  </div>
                  <div className="organizationLink">
                    Website:{' '}
                    <a
                      href="https://www.google.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://heraldcollege.edu.np/
                    </a>
                  </div>
                </div>
              </div>
            </Slide>
          );
        })}
      </div>
    </div>
  );
}
export default Education;
