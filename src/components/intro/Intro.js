import "./intro.css";
import cameron from "./img/cameron.jpg";

const Intro = () => {
  return (
    <div className="Intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro"> Hello, my name is </h2>
          <h1 className="intro-name"> Cameron Stroup</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">Software Engineer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">Life Time Learner</div>
            </div>
          </div>
          <div className="intro-description">
            MY NAME IS CAMERON STROUP AND I AM A FULLSTACK SOFTWARE DEVELOPER
            AND WEB DESIGNER STUDENT. IM NEW TO PROGRAMMING BUT IM IMPROVING
            EVERYDAY AND LOVE TO DEVELOP CREATIVE AND INNOVATIVE APPLICATIONS. I
            AM A QUICK LEARNER WITH A STRONG DESIRE TO CONTINUE EXPANDING MY
            KNOWLEDGE. I AM SELF-MOTIVATED AND A TEAM PLAYER. LOOKING FOR MY
            NEXT CHALLENGE!
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="pic-shape"></div>
        <img src={cameron} alt="" className="intro-img" />
      </div>
    </div>
  );
};

export default Intro;
