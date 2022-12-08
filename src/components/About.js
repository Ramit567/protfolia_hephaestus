import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
              <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={5} />
                    </h3>
                    <span className="name">
                      Years 
                      <br />
                      Teaching
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={25} />
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Papers
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a Profrssor`}</span>
                <h3>I have a Ph.D. in Electrical Engineering from Stanford University</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {` I am broadly interested in statistical machine learning, 
                  mathematical data science, optimization, 
                  applied probability, information theory, and their 
                  applications in science and engineering.Recently, 
                  my research has been focusing on reinforcement learning, 
                  privacy and security in machine learning systems, the economic 
                  perspective of machine learning, and the applications of machine learning in autonomous driving and robotics.`}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Contract  Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
