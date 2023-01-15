import './Experience.css';
import { Slide } from 'react-awesome-reveal';
import data from '../data/database';
function Experience() {
  return (
    <div className="experiences-container" id="experience">
      <div className="top-part-experiences">Experiences</div>
      <div className="bottom-part-experiences">
        {data.experiences.map((data, index) => {
          return (
            <Slide direction="right" key={index}>
              <div className="card">
                <div className="card-upper">
                  <div className="left-side-card-upper">
                    <div className="sub">{data.title}</div>
                    <div className="company-date">{data.companyDate}</div>
                  </div>
                  <div className="right-side-card-upper">
                    <img className="icon-img" src={data.img} alt="" />
                  </div>
                </div>
                <div className="card-below">{data.about}</div>
              </div>
            </Slide>
          );
        })}
      </div>
    </div>
  );
}
export default Experience;
