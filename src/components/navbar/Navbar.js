import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="nav">
      <a href="" className="site-title">
        {" "}
        Cameron Stroup
      </a>
      <ul>
        <li>
          <a href="/aboutMe">About Me</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contactMe"> Contact Me</a>
        </li>
        <li>
          <a href="/resume"> Resume</a>
        </li>
      </ul>{" "}
    </nav>
  );
}
