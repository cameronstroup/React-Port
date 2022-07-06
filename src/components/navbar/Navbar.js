import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <div className="site-title">Cameron Stroup</div>
      <ul>
        <li>
          <Link to="/aboutMe">About Me</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contactMe">Contact Me</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
