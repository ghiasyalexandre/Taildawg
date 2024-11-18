import React from "react";

import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation(); // Get the current location
  const showFooter = `${location.pathname}` === "/customizer" ? false : true;

  return (
    <>
      {showFooter && (
        <footer className={``}>
          <div className="container px-4 py-4 mx-auto">
            <div className="flex flex-col items-center text-center">
              <Link to="/" draggable={false} className="relative inline-block">
                <img
                  className="w-auto scale-70 hover:scale-80 lg:scale-90 lg:hover:scale-100 transition-transform duration-500 ease-in-out"
                  src="./imgs/taildawgLogo.webp"
                  alt=""
                  draggable={false}
                />
              </Link>

              <p className="max-w-md mx-auto mt-4 font-semibold text-gray-500 dark:text-gray-300">
                Try our Paddle Editor
              </p>

              <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                <button className="flex  items-center justify-center shadow-lg shadow-black/50 order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-white hover:text-red-600 dark:hover:text-red-500 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:hover:border-red-600 dark:text-gray-200  sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-black focus:ring-gray-300 focus:ring-opacity-40">
                  <svg
                    className="w-5 h-5 mx-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <span className="mx-1">View Demo</span>
                </button>

                <Link
                  to="/customizer"
                  draggable={false}
                  className="w-full px-5 py-2 text-sm tracking-wide shadow-lg shadow-black/50 text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-white focus:ring-opacity-80"
                >
                  Get started
                </Link>
              </div>
            </div>

            <hr className="my-10 border-gray-200 dark:border-gray-700" />

            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
              <p className="text-sm text-gray-500">
                © 2024, Taildawg Productions
              </p>

              {/* Payment Icons */}
              <div className="flex gap-2 py-1 pt-4 sm:pt-1 justify-center">
                <div className="bg-white pt-1 h-8 w-10 rounded-md flex align-middle justify-center">
                  <img
                    className="w-6 h-6"
                    src="../public/imgs/paypal-icon.svg"
                    draggable={false}
                  />
                </div>
                <div className="bg-blue-400 pt-0 h-8 w-10 rounded-md flex align-middle justify-center">
                  <img
                    className="w-7 h-8"
                    src="../public/imgs/venmo-icon.svg"
                    draggable={false}
                  />
                </div>
                <div className="bg-white pl-0.5 pt-0 h-8 w-10 rounded-md flex align-middle justify-center">
                  <img
                    className="w-7 h-8"
                    src="../public/imgs/zelle-1.svg"
                    draggable={false}
                  />
                </div>
              </div>

              <div className="flex mt-1 pt-1 sm:mt-0">
                {/* <Link
                  to="/about"
                  className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                  aria-label="About Us"
                  draggable={false}
                >
                  {" "}
                  About Us{" "}
                </Link> */}

                <Link
                  to="/contact"
                  className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                  aria-label="Contact"
                  draggable={false}
                >
                  {" "}
                  Contact{" "}
                </Link>

                <Link
                  to="/privacy"
                  className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                  aria-label="Privacy Policy"
                  draggable={false}
                >
                  {" "}
                  Privacy{" "}
                </Link>

                <Link
                  to="/faq"
                  className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                  aria-label="Frequently Asked Questions"
                  draggable={false}
                >
                  {" "}
                  FAQ{" "}
                </Link>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
