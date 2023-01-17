// import img from '../img/pema.jpg';
import variable from '../config/config';
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
    const api = variable.API_URI;
    const response = await fetch(`${api}/about`);

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
            src="https://images.unsplash.com/photo-1597019558926-3eef445fdf60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            // src={img}
            // src="https://media.licdn.com/dms/image/C5603AQHRv-dTiZ9xOA/profile-displayphoto-shrink_800_800/0/1625419846609?e=1678320000&v=beta&t=zwm8vLbwZgeuqHab66Cm6h75zXTug7Fyi08lHVFFs4E"
            alt="profile.jpg"
          />
        </Slide>
      </div>
    </div>
  );
}
export default About;
