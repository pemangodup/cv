import { useEffect, useState } from 'react';
import './Education.css';
import variable from '../config/config';

function Try() {
  const [education, setEducation] = useState([]);

  useEffect((state) => {
    fetchData();
  }, []);
  async function fetchData() {
    const api = variable.API_URI;
    const response = await fetch(`${api}/education`);
    const data = await response.json();
    setEducation(data.data);
  }

  return (
    <div id="education">
      <div className="education-title">Education</div>
      <div className="education-main-container">
        <div className="card-container">
          <div className="education-card-content">
            {education.map((data, index) => {
              return (
                <div key={index} className="card-education">
                  <div className="card-top">
                    <div className="degree">{data.degree}</div>
                    <div className="institute">{data.institute}</div>
                  </div>
                  <div className="card-bottom">
                    <div className="edu-addess">{data.address}</div>
                    <div className="organizationLink">
                      <a href={data.website} target="_blank" rel="noreferrer">
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Try;
