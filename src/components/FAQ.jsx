import React from "react";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import { useState } from "react";

export default function FAQ() {
  const [isOpen, setIsOpen] = useState([false, false, false, false, false]);

  const toggleOpen = (index) => {
    setIsOpen((prev) => {
      const newIsOpen = [...prev];
      newIsOpen[index] = !newIsOpen[index];
      return newIsOpen;
    });
  };

  return (
    <>
      <div className="container px-6 pt-12 py-24 mx-auto md:px-24">
        <h1 className="text-3xl text-center lg:text-left pt-8 font-semibold text-black lg:text-4xl dark:text-white">
          Frequently Asked Questions
        </h1>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div>
          <div>
            <button
              onClick={() => toggleOpen(0)}
              className="flex items-center focus:outline-none "
            >
              {isOpen[0] ? (
                <svg
                  className="flex-shrink-0 w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
              <h1 className="mx-4 text-xl text-gray-50 dark:text-white">
                How do I order ?
              </h1>
            </button>

            {isOpen[0] && (
              <div className="flex mt-8 md:mx-10">
                <span className="border border-s-2 border-red-600"></span>

                <p className="max-w-3xl lg:text-lg lg:max-w-full text-justify  px-4 text-neutral-700 dark:text-neutral-300">
                  You may order through Instagram DMs @taildawgproductions or
                  navigate to the "Order" tab of this website. From the "Order"
                  tab, you may select your desired product, and proceed to fill
                  out the additional customization details. After placing your
                  order, we will contact you with further details including a
                  mock up design and additional questions.
                </p>
              </div>
            )}
          </div>
          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div>
            <button
              onClick={() => toggleOpen(1)}
              className="flex items-center focus:outline-none"
            >
              {isOpen[1] ? (
                <svg
                  className="flex-shrink-0 w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
              <h1 className="mx-4 text-xl text-gray-50 dark:text-white">
                Do your paddles come painted ?
              </h1>
            </button>

            {isOpen[1] && (
              <div className="flex mt-8 md:mx-10">
                <span className="border border-s-2 border-red-600"></span>

                <p className="max-w-3xl lg:text-lg lg:max-w-full text-justify  px-4 text-neutral-700 dark:text-neutral-300">
                  Our paddles come with an optional painting service for an
                  extra charge. On average, our painting charge is an additional
                  $100 - $150. Our services vary based off complexity and time
                  taken to hand paint.
                </p>
              </div>
            )}
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div>
            <button
              onClick={() => toggleOpen(2)}
              className="flex items-center focus:outline-none"
            >
              {isOpen[2] ? (
                <svg
                  className="flex-shrink-0 w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
              <h1 className="mx-4 text-xl text-gray-50 dark:text-white">
                What are your shipping details ?
              </h1>
            </button>

            {isOpen[2] && (
              <div className="flex mt-8 md:mx-10">
                <span className="border border-s-2 border-red-600"></span>

                <p className="max-w-3xl lg:text-lg lg:max-w-full text-justify  px-4 text-neutral-700 dark:text-neutral-300">
                  Shipping is available for tikis and paddles. Shipping costs
                  vary by location and weight of package. Pick up is the
                  preferred method of product delivery as shipping can be costly
                  due to the weight size and size of woodwork.
                </p>
              </div>
            )}
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div>
            <button
              onClick={() => toggleOpen(3)}
              className="flex items-center focus:outline-none"
            >
              {isOpen[3] ? (
                <svg
                  className="flex-shrink-0 w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
              <h1 className="mx-4 text-xl text-gray-50 dark:text-white">
                How are your paddles priced ?
              </h1>
            </button>

            {isOpen[3] && (
              <div className="flex mt-8 md:mx-10">
                <span className="border border-s-2 border-red-600"></span>

                <p className="max-w-3xl lg:text-lg lg:max-w-full text-justify  px-4 text-neutral-700 dark:text-neutral-300">
                  Paddles are priced based on size, shape, design and details
                  desired. You have the option of paying 50% of the total quote
                  before production and the final 50% after production.
                  <br />
                  <br /> To pay 50% first and 50% after production, use the code
                  "firsthalf". We will contact you and charge your card the
                  second half after production.
                </p>
              </div>
            )}
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div>
            <button
              onClick={() => toggleOpen(4)}
              className="flex items-center focus:outline-none"
            >
              {isOpen[4] ? (
                <svg
                  className="flex-shrink-0 w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
              <h1 className="mx-4 text-xl text-gray-50 dark:text-white">
                How can I pay for my appointment ?
              </h1>
            </button>

            {isOpen[4] && (
              <div className="flex mt-8 md:mx-10">
                <span className="border border-s-2 border-red-600"></span>

                <p className="max-w-3xl lg:text-lg lg:max-w-full text-justify  px-4 text-neutral-700 dark:text-neutral-300">
                  We take payment via paypal and venmo exclusivly as of right
                  now.
                </p>
              </div>
            )}
            <hr className="my-8 border-gray-200 dark:border-gray-700" />
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}
