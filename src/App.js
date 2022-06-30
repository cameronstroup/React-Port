import React from "react";
import Nav from "./components/header/nav";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/intro/projectsList/projectList";

export default function App() {
  return (
    <div>
      <Nav />
      <Intro />
      <ProjectList />
    </div>
  );
}
