import { useState, useEffect } from "react";
import { FaUser, FaProjectDiagram, FaCogs, FaEnvelope } from "react-icons/fa";
import NavLink from './NavLink'; // Import the NavLink component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenuOnOutsideClick = (event: MouseEvent) => {
      const menu = document.getElementById("menu");
      const hamburger = document.getElementById("hamburger");
      if (
        menu &&
        hamburger &&
        !menu.contains(event.target as Node) &&
        !hamburger.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", closeMenuOnOutsideClick);
    } else {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    }

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isOpen]);

  return (
    <div>
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center relative z-20">
        <h1 className="text-2xl font-bold font-pixel">kalzumaki</h1>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          id="hamburger"
          className="text-2xl text-teal-600"
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Navigation Links - Sidebar for All Screens */}
        <nav
          id="menu"
          className={`fixed top-0 right-0 w-64 h-screen bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-l-3xl transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } z-30`}
          style={{
            backgroundImage: 'url("/path-to-your-pixel-pattern.png")', // Custom pixelated pattern
            backgroundSize: "100px 100px", // Adjust pixel size for your desired effect
            backgroundRepeat: "repeat", // Repeat the pattern
          }}
        >
          <ul className="flex flex-col items-center space-y-6 mt-8">
            <li>
              <NavLink
                href="#about"
                label="About"
                icon={<FaUser className="mr-2" />}
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <NavLink
                href="#projects"
                label="Projects"
                icon={<FaProjectDiagram className="mr-2" />}
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <NavLink
                href="#skills"
                label="Skills"
                icon={<FaCogs className="mr-2" />}
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <NavLink
                href="#contact"
                label="Contact"
                icon={<FaEnvelope className="mr-2" />}
                onClick={() => setIsOpen(false)}
              />
            </li>
          </ul>
        </nav>

        {/* Overlay backdrop with blur effect for the whole background */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-30 z-20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </header>
    </div>
  );
};

export default Header;
