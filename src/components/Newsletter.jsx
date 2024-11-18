import React, { useState } from "react";

export default function Newsletter() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your EmailJS credentials here
    emailjs.init("l7BZNQP3cx-sa0HX1");

    emailjs
      .send(
        "service_0vugl7r", // Replace with your service ID
        "template_mzaa01h", // Replace with your template ID
        formData
        // "ghiasy" // Replace with your user ID
      )
      .then(
        (response) => {
          setStatus("SUCCESS");
          setFormData({ email: "" });
          setTimeout(() => setStatus(""), 5000); // Clear status message after 3 seconds
        },
        (error) => {
          setStatus("ERROR");
          console.log("Failed to send email", error);
        }
      );
  };

  return (
    <div className="relative isolate overflow-hidden bg-gradient-radial from-red-600  dark:from-red-800 py-16 mb-10 sm:py-12 lg:py-20 lg:mb-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white dark:text-white">
              Join Our Community
            </h2>
            <p className="mt-4 dark:text-gray-300">
              Stay updated with the latest news, articles, and exclusive content
              from our team. Subscribe to our newsletter and never miss out on
              important updates.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex max-w-md gap-x-4"
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleChange}
                required
                className="min-w-0 flex-auto rounded-md border-0 placeholder:text-neutral-200 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 dark:ring-rose-500/5 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md  bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md shadow-black/50 hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:focus-visible:outline-rose-600"
              >
                Subscribe
              </button>
            </form>
            {status === "SUCCESS" && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
            {status === "ERROR" && (
              <p className="text-red-500 mt-4">
                Failed to send message. Please try again later.
              </p>
            )}
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly Updates</dt>
              <dd className="mt-2 leading-7 dark:text-gray-400">
                Get new articles, tips, and insights delivered to your inbox
                every week. Stay informed and inspired!
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
                  />
                </svg>
              </div>
              <dt className="mt-4 font-semibold text-white">No Spam</dt>
              <dd className="mt-2 leading-7 dark:text-gray-400">
                We respect your privacy and will never send you unwanted emails.
                Unsubscribe anytime with one click.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff0000] to-[#ff0000] opacity-70 dark:opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </div>
  );
}
