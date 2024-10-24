import React from "react";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <section>
        <div class="px-16 py-12 lg:py-16 mx-auto">
          <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
              {/* Hero */}
              <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold text-black text-center lg:text-left dark:text-white lg:text-4xl">
                  The Best Place to Bring <br /> Your{" "}
                  <span class="text-red-600 ">Paddles</span> to Life
                </h1>

                <p class="mt-3 text-gray-600 dark:text-gray-300">
                  We provide everything you need to design, customize, and
                  perfect your paddles. From expert craftsmanship to
                  personalized options, we help you bring your vision to life.
                </p>

                <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 dark:bg-red-600 rounded-lg lg:w-auto hover:bg-blue-500 dark:hover:bg-red-500 focus:outline-none focus:bg-blue-500 dark:focus:bg-red-500">
                  Shop Now
                </button>
              </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                class="w-full h-full rounded-xl lg:max-w-3xl"
                src="../public/imgs/taildawgHeroImg.png"
                alt="Catalogue-pana.svg"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section className="bg-white dark:bg-black">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-black capitalize lg:text-3xl dark:text-white">
            Featured Products
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <img
                className="object-cover w-full rounded-lg h-80"
                src="//taildawgproductions.com/cdn/shop/files/Product_Wood_Background_Tikis.png?v=1716532546&auto=format&fit=crop&w=1565&q=80"
                alt="Website Collection"
                draggable="false"
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-red-500">
                Custom Top Tiki
              </h2>
              <p className="mt-2 text-md tracking-wider text-blue-500 uppercase dark:text-white">
                From $40.00 USD
              </p>
            </div>

            <div>
              <img
                className="object-cover w-full rounded-lg h-80"
                src="//taildawgproductions.com/cdn/shop/files/Untitled_Artwork_21_2ddba306-e1e1-439c-a5ff-309ef6f3a4bc.png?v=1717282269&auto=format&fit=crop&w=764&q=80"
                alt="UI Kit Collection"
                draggable="false"
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-red-500">
                Custom Top Paddle Inquiry
              </h2>
              <p className="mt-2 text-md tracking-wider text-blue-500 uppercase dark:text-white">
                From $0.00 USD
              </p>
            </div>

            <div>
              <img
                className="object-cover w-full rounded-lg h-80"
                src="//taildawgproductions.com/cdn/shop/files/Product_Wood_Background_Custom_Top_Paddle.png?v=1716533687&auto=format&fit=crop&w=1470&q=80"
                alt="Mobile Mockup"
                draggable="false"
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-red-500">
                Traditional Wooden Paddle Inquiry
              </h2>
              <p className="mt-2 text-md tracking-wider text-blue-500 uppercase dark:text-white">
                From $0.00 USD
              </p>
            </div>

            <div>
              <img
                className="object-cover w-full rounded-lg h-80"
                src="//taildawgproductions.com/cdn/shop/files/PDPsi_Berserk_Custom_Shape_Tiki_b3d1fb67-9479-49a5-beaa-0769f91ba7aa.jpg?v=1716532439&auto=format&fit=crop&w=1565&q=80"
                alt="Website Collection"
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-red-500">
                Custom Shape Tiki
              </h2>
              <p className="mt-2 text-md tracking-wider text-blue-500 uppercase dark:text-white">
                From $50.00 USD
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <Newsletter />
      {/* <section>
        <div class="container px-6 py-16 mx-auto">
          <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  Subscribe To The{" "}
                  <span class="text-blue-600 dark:text-red-600">
                    Newsletter
                  </span>
                </h1>

                <p class="mt-3 text-gray-600 dark:text-gray-400">
                  Be the first to know when our brand is{" "}
                  <span class="font-medium text-blue-500 dark:text-red-600">
                    Live
                  </span>
                </p>

                <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                  <input
                    id="email"
                    type="text"
                    class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Email Address"
                  />

                  <button class="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 dark:bg-red-600 dark:hover:bg-red-500 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 dark:focus:bg-red-500">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                class="w-full h-full max-w-md"
                src="https://merakiui.com/images/components/Email-campaign-bro.svg"
                alt="email illustration vector art"
              />
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default Home;
