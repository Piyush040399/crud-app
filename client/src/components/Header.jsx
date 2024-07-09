import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          {" "}
          <Link to={"/"}>MyApp</Link>{" "}
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? "block" : "hidden"} lg:block`}>
          <ul className="lg:flex items-center">
            <li className="lg:ml-4">
              <Link
              to={"/"}
                className="text-white hover:text-gray-300 px-2 py-1"
              >
                Home
              </Link>
            </li>
            <li className="lg:ml-4">
              <a
                href="#about"
                className="text-white hover:text-gray-300 px-2 py-1"
              >
                About
              </a>
            </li>
            <li className="lg:ml-4">
              <a
                href="#services"
                className="text-white hover:text-gray-300 px-2 py-1"
              >
                Services
              </a>
            </li>
            <li className="lg:ml-4">
              <a
                href="#contact"
                className="text-white hover:text-gray-300 px-2 py-1"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
