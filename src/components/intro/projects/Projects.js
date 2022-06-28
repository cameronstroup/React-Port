import "./projects.css";

const Projects = ({ img, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} alt="" />
      <img src={img} alt="" className="p-img" />
    </div>
  );
};

export default Projects;
