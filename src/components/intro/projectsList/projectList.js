import "./projectList.css";
import Project from "../projects/Projects";
import { projects } from "../../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Front & Backend Projects</h1>
        <p className="pl-descrip">
          These are some of my projects I completed over my Coding Bootcamp.
          They illustrate my Full-stack capabilities
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.title}
            description={item.descripiton}
            github={item.github}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
