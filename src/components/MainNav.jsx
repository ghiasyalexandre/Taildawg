import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function MainNav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Conditionally add/remove the mb-16 class if the current path is /customizer
  const navChanger = `mx-2 py-4  ${
    location.pathname !== "/customizer"
      ? "lg:pb-16 "
      : isOpen
      ? "mb-0"
      : "mb-12 lg:mb-0"
  }
  } `;

  const logoChanger = `absolute top-0 left-1/2 transform -translate-x-1/2 h-32 z-50 pointer-events-none ${
    location.pathname !== "/customizer"
      ? "flex items-center justify-center"
      : "flex items-center justify-center lg:block lg:left-20 lg:top-4"
  }`;

  return (
    <nav id="home" className="bg-transparent relative">
      {/* Center Logo */}
      <div id="logo" className={logoChanger}>
        <Link to="/" className="relative group">
          <img
            className="scale-50 lg:scale-70 pointer-events-auto hover:scale-55 lg:hover:scale-75 lg:pt-8 transition-transform duration-500"
            src="./imgs/taildawgLogoOutline.webp"
            alt="Taildawg"
            draggable="false"
          />
          {/* Tooltip */}
          {/* <div
            className="opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 
            rounded-md absolute right-0 top-16 z-100 mt-2 pointer-events-none"
          >
            Home
          </div> */}
        </Link>
      </div>

      {/* The div with the dynamic mb-16 class */}
      <div id="setChange" className={navChanger}>
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 focus:outline-none"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className={`inset-0 z-20 flex-1 w-full h-fit px-2 pt-2 transition-transform duration-300 ease-in-out lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col capitalize text-black lg:flex lg:flex-row lg:items-center">
              <Link
                to="/"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:ml-4 text-black dark:text-white hover:text-gray-400 hover:underline hover:underline-offset-8"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:ml-4 text-black dark:text-white hover:text-gray-400 hover:underline hover:underline-offset-8"
              >
                Gallery
              </Link>
              <Link
                to="/order"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:ml-4 text-black dark:text-white hover:text-gray-400 hover:underline hover:underline-offset-8"
              >
                Order
              </Link>
              <Link
                to="/contact"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:ml-4 text-black dark:text-white hover:text-gray-400 hover:underline hover:underline-offset-8"
              >
                Contact
              </Link>
              <Link
                to="/customizer"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:ml-4 text-black dark:text-white hover:text-gray-400 hover:underline hover:underline-offset-8"
              >
                Customizer
              </Link>
            </div>
          </div>
          {/* Social Links */}
          <div className="absolute z-20 right-2 lg:right-2 top-4 lg:-top-1 pt-3 flex lg:mt-2 lg:mx-0">
            <a
              href="https://www.instagram.com/taildawgproductions/"
              className="md:mx-1 lg:mx-2 text-black transition-colors duration-300 transform dark:text-white hover:text-gray-500 dark:hover:text-gray-400"
              aria-label="Instagram"
              target="blank"
            >
              <svg
                className="w-8 h-8 fill-current"
                viewBox="0 0 24 24"
                fill="rgb(217, 50, 117)"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
            <a
              href="#"
              className="md:mx-1 lg:mx-2 text-black transition-colors duration-300 transform dark:text-white hover:text-gray-500 dark:hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg
                className="w-8 h-8 fill-current"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
            <a
              href="#"
              className="md:mx-1 lg:mx-2 text-black transition-colors duration-300 transform dark:text-white hover:text-gray-500 dark:hover:text-gray-400"
              aria-label="Reddit"
            >
              <svg
                className="w-8 h-8 fill-current"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
