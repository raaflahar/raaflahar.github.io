import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hero from "./assets/Container/Hero/Hero.jsx";
import About from "./assets/Container/About/About.jsx";
import Navbar from "./assets/Header/Navbar/Navbar.jsx";
import Portfolio from "./assets/Container/Portfolio/Portfolio.jsx";
import Education from "./assets/Container/Education/Education.jsx";
import Blog from "./assets/Container/Blog/Blog.jsx";
import Contact from "./assets/Container/Contact/Contact.jsx";
import Resume from "./assets/Container/Resume/Resume.jsx";
import Footer from "./assets/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
    <Education />
    <Blog />
    <Contact />
    <Resume />
    <Footer />
  </StrictMode>
);
