import React from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/intro/projectsList/projectList";

export default function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <ProjectList />
    </div>
  );
}
