import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed bg-transparent top-0 left-0 w-full flex items-center z-10 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } transition duration-300 ease-in-out`}>
        <div id="container">
            <div className="flex items-center justify-between relative">
                <div className="px-4">
                    <a href="#hero" className="font-bold text-lg text-secondary block py-6 hover:text-secondary transition duration-200 ease-in-out">
                        Home
                    </a>
                </div>
                <div name="menu-bar" className="px-4 hidden sm:flex">
                  <a href="#about" className="website-menu">
                    About Me
                  </a>
                  <a href="#portfolio" className="website-menu">
                    Portfolio
                  </a>
                  <a href="#education" className="website-menu">
                    Education
                  </a>
                  <a href="#blog" className="website-menu">
                    Blog
                  </a>
                  <a href="#contact" className="website-menu">
                    Contact
                  </a>
                  <a href="#resume" className="website-menu">
                    Resume
                  </a>
                </div>
                <div className="flex items-center px-30 sm:hidden">
                    <button
                    id="hamburger"
                    name="hamburger"
                    type="button"
                    onClick={handleToggleMenu}
                    className="block absolute right-4">
                        <span className={`hamburger-menu ${isMenuOpen ? "open" : ""} origin-top-left transition duration-200 ease-in-out`}></span>
                        <span className={`hamburger-menu ${isMenuOpen ? "open" : ""} transition duration-200 ease-in-out`}></span>
                        <span className={`hamburger-menu ${isMenuOpen ? "open" : ""} origin-bottom-left transition duration-200 ease-in-out`}></span>
                    </button>
                </div>
                <nav className={`absolute bg-white shadow-lg max-w-[250px] w-full top-full right-1 transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"}`}>
                    <ul className="flex flex-col items-center py-4">
                      <li className="py-2">
                        <a href="#about" className="text-black hover:text-secondary">
                          About Me
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          href="#portfolio"
                          className="text-black hover:text-secondary"
                        >
                          Portfolio
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          href="#education"
                          className="text-black hover:text-secondary"
                        >
                          Education
                        </a>
                      </li>
                      <li className="py-2">
                        <a href="#blog" className="text-black hover:text-secondary">
                          Blog
                        </a>
                      </li>
                      <li className="py-2">
                        <a href="#contact" className="text-black hover:text-secondary">
                          Contact
                        </a>
                      </li>
                      <li className="py-2">
                        <a href="#resume" className="text-black hover:text-secondary">
                          Resume / CV
                        </a>
                      </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}