import React from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/intro/projectsList/projectList";

import Home from "./components/Home";
import Footer from "./components/footer/Footer";
import Resume from "./components/resume/Resume";
import ContactForm from "./components/contactSection/ContactMe";

export default function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
    case "/aboutMe":
      component = <Intro />;
      break;
    case "/projects":
      component = <ProjectList />;
      break;
    case "/contactMe":
      component = <ContactForm />;
      break;
    case "/resume":
      component = <Resume />;
  }
  return (
    <div>
      <Navbar />
      {component}
      <Footer />
    </div>
  );
}
