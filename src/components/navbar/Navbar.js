import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
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
    </div>
  );
}
