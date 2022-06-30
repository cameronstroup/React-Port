import React from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/intro/projectsList/projectList";
import ContactMe from "./components/contactSection/ContactMe";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";

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
      component = <ContactMe />;
  }
  return (
    <div>
      <Navbar />
      {component}
      <Footer />
    </div>
  );
}
