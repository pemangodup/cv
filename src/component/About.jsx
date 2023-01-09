import img from '../img/pema.jpg';
import './About.css';
import { Slide } from 'react-awesome-reveal';
import database from '../data/database';
function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-container-detail">
        <Slide>
          <div className="about-subject">Hello! I am Pema Ngodup</div>
          <div className="about-person">
            I am passionate about UI/UX design and Web Design. I am a skilled
            front-end developer and master of graphic design tools such as
            Photoshop and Sketch. I am a quick learner and a team worker that
            gets the job done. I can easily capitalize on low hanging fruits and
            quickly maximize timely deliverables for real-time schemas.
          </div>
          <div className="about-details">
            {database.personDetails.map((deta) => {
              return (
                <div className="straight-line">
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
