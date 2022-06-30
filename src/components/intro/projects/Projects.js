import "./projects.css";

const Projects = ({ img, link, title, description, github }) => {
  return (
    <div className="p image">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} helo alt="testing" />

      <img src={img} alt="" className="p-img image_img" />
      <div class="image__overlayP">
        <div class="image__titleP">{title} </div>
        <p class="image__descriptionP">{description}</p>
        <a href={link} target="_blank">
          Live Link
        </a>
        <a href={github} target="_blank">
          Github
        </a>
      </div>
    </div>
  );
};

export default Projects;
