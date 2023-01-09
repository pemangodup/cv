import './Experience.css';
import { Slide } from 'react-awesome-reveal';
function Experience() {
  const personDetails = [
    { h: 'Age', e: '28' },
    { h: 'Email', e: 'pngodup123@getDefaultNormalizer.com' },
    { h: 'Phone', e: '920090988' },
    { h: 'Age', e: '28' },
    { h: 'Email', e: 'pngodup123@getDefaultNormalizer.com' },
    { h: 'Phone', e: '920090988' },
  ];
  return (
    <div className="experiences-container" id="experience">
      <div className="top-part-experiences">Experiences</div>
      <div className="bottom-part-experiences">
        {personDetails.map((h) => {
          return (
            <Slide direction="right">
              <div className="card">
                <div className="card-upper">
                  <div className="left-side-card-upper">
                    <div className="sub">Web Design</div>
                    <div className="company-date">Webbie LLC. (2018-2020)</div>
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
                  consectetur sed dolorem eius eligendi optio vitae porro omnis,
                  quaerat impedit expedita doloribus?
                </div>
              </div>
            </Slide>
          );
        })}
      </div>
    </div>
  );
}
export default Experience;
