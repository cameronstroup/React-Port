import "./intro.css";

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
              <div className="intro-title-item">UI/Life Time Learner</div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-right">Right </div>
    </div>
  );
};

export default Intro;
