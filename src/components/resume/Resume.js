function Resume() {
  return (
    <section className="my-1">
      <h1 id="resume"> Resume</h1>
      Download my &nbsp;
      <a
        href={require(`../intro/img/Resume.pdf`)}
        download="Cameron Stroup's Resume"
      >
        Resume
      </a>
      <div className="my-2">
        <h4>Programing</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>Node</li>
          <li>React</li>
          <li>API's</li>
          <li>Rest</li>
        </ul>
        <h4>Databases</h4>
        <ul>
          <li>SQL Server</li>
          <li>MySql</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
