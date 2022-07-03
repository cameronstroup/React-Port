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
        <Route path="/React-Port" element={<Intro />} />
        <Route path="/React-Port/aboutMe" element={<Intro />} />
        <Route path="/React-Port/projects" element={<ProjectList />} />
        <Route path="/React-Port/resume" element={<Resume />} />
        <Route path="/React-Port/contactMe" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}
