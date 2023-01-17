import './Education.css';
import { Slide } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';
import variable from '../config/config';
function Education() {
  const [education, setEducation] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const api = variable.API_URI;
    const response = await fetch(`${api}/education`);
    const data = await response.json();
    setEducation(data.data);
  }
  return (
    <div className="education-container" id="education">
      <div className="top-part-education">Education</div>
      <div className="bottom-part-education">
        {education.map((data, index) => {
          return (
            <Slide direction="left" key={index}>
              <div className="card-education">
                <div className="card-upper-education">
                  <div className="left-side-card-upper-education">
                    <div className="sub">{data.degree} </div>
                    <div className="company-date">{data.institute}</div>
                  </div>
                </div>
                <div className="card-below-education">
                  <div className="educationDegree">{data.address}</div>
                  <div className="organizationLink">
                    Website:{' '}
                    <a href={data.website} target="_blank" rel="noreferrer">
                      {data.website}
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
