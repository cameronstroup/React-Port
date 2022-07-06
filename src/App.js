import React from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/intro/projectsList/projectList";

import Footer from "./components/footer/Footer";
import Resume from "./components/resume/Resume";
import ContactForm from "./components/contactSection/ContactMe";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/aboutMe" element={<Intro />} />
        <Route path="/React-Port" element={<Intro />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contactMe" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}
