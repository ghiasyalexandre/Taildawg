import React from "react";
import Newsletter from "./Newsletter";
import { ModelView } from "./ModelView";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div className="container px-6 py-8 lg:py-16 mx-auto md:border-2 mt-14 shadow-neonDark border-black rounded-2xl mb-12">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2 px-8">
              {/* Hero */}
              <div className="lg:max-w-lg">
                <h1 className="text-3xl sm:text-4xl font-semibold text-black text-center lg:text-left dark:text-white lg:leading-tight lg:text-5xl">
                  The Best Place to Bring Your Paddles to{" "}
                  <span className="text-red-600 ">Life!</span>
                </h1>

                <p className="mt-3 px-0 sm:px-8 md:px-0 lg:px-0 text-gray-800 dark:text-gray-200 text-center lg:text-left text-sm sm:text-base lg:text-lg">
                  We provide everything you need to design, customize, and
                  perfect your paddles. From expert craftsmanship to
                  personalized options, we help you bring your vision to life.
                </p>
                <div className="w-full flex lg:inline-block justify-center">
                  <Link to="/about" draggable={false}>
                    <button className="w-full shadow-lg shadow-black/50 hover:scale-110 mr-2 py-2 lg:mx-0 mt-6 text-sm tracking-wider text-white uppercase duration-300 transition-all bg-red-600 rounded-lg lg:w-auto hover:bg-red-500 focus:outline-none  focus:bg-red-500">
                      About Us
                    </button>
                  </Link>
                  <Link to="/order" draggable={false}>
                    <button className="w-full shadow-lg shadow-black/50 hover:scale-110  ml-2 py-2 lg:ml-4 mt-6 text-sm tracking-wider text-white uppercase transition-all duration-300 transform bg-red-600 rounded-lg lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 xl:w-[60%]">
              {/* <img
                className="w-full h-full rounded-xl lg:max-w-3xl"
                src="../public/imgs/taildawgHeroImg.png"
                alt="Catalogue-pana.svg"
                draggable="false"
              /> */}
              <ModelView />
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio */}
      <section className="">
        <div className="container px-2 pb-48 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-black capitalize lg:text-3xl scale-150 dark:text-white">
            Featured Products
          </h1>

          <hr className="my-10 mx-auto w-[80%] sm:w-full border-gray-200 dark:border-neutral-700" />

          <div className="grid xs:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-y-64 gap-x-8 xs:gap-y-40 pb-12 sm:pb-0">
            <div className="relative h-[180px] sm:h-[277px] group w-full rounded-3xl">
              <div className="overflow-hidden w-full h-80 rounded-3xl shadow-lg shadow-black/50 dark:shadow-white/30">
                <img
                  src="//taildawgproductions.com/cdn/shop/files/Product_Wood_Background_Tikis.png?v=1716532546&width=533"
                  alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                  className=" group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full "
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold capitalize text-red-600 group-hover:text-red-500">
                Custom Top Tiki
              </h2>

              <p className="mt-2 text-md tracking-wider text-black  uppercase dark:text-white">
                From $40.00 USD
              </p>
              {/* <div className="absolute -z-50 inset-2 rounded-3xl bg-gradient-to-r from-red-600 via-rose-500 to-red-600 opacity-75 blur transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"></div> */}
            </div>

            <div className="relative h-[180px] sm:h-[277px] group w-full rounded-3xl">
              <div className="overflow-hidden w-full h-80 rounded-3xl shadow-lg shadow-black/50 dark:shadow-white/30">
                <img
                  src="//taildawgproductions.com/cdn/shop/files/Untitled_Artwork_21_2ddba306-e1e1-439c-a5ff-309ef6f3a4bc.png?v=1717282269&auto=format&fit=crop&w=764&q=80"
                  alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                  className=" group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold capitalize text-red-600 group-hover:text-red-500">
                Custom Top Paddle Inquiry
              </h2>

              <p className="mt-2 text-md tracking-wider text-black  uppercase dark:text-white">
                From $0.00 USD
              </p>
              {/* <div className="absolute -z-50 inset-2 rounded-3xl bg-gradient-to-r from-red-600 via-rose-500 to-red-600 opacity-75 blur transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"></div> */}
            </div>

            <div className="relative h-[180px] sm:h-[277px] group w-full rounded-3xl">
              <a>
                <div className="overflow-hidden w-full h-80 rounded-3xl shadow-lg shadow-black/50 dark:shadow-white/30">
                  <img
                    src="//taildawgproductions.com/cdn/shop/files/Product_Wood_Background_Custom_Top_Paddle.png?v=1716533687&auto=format&fit=crop&w=1470&q=80"
                    alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                    className=" group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                  />
                </div>
                <h2 className="mt-4 text-xl font-semibold capitalize text-red-600 group-hover:text-red-500">
                  Traditional Wooden <br /> Paddle Inquiry
                </h2>
              </a>

              <p className="mt-2 text-md tracking-wider text-black  uppercase dark:text-white">
                From $0.00 USD
              </p>
              {/* <div className="absolute -z-50 inset-2 rounded-3xl bg-gradient-to-r from-red-600 via-rose-500 to-red-600 opacity-75 blur transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"></div> */}
            </div>

            <div className="relative h-[180px] sm:h-[277px] group w-full rounded-3xl">
              <div className="overflow-hidden w-full h-80 rounded-3xl shadow-lg shadow-black/50 dark:shadow-white/30">
                <img
                  src="//taildawgproductions.com/cdn/shop/files/PDPsi_Berserk_Custom_Shape_Tiki_b3d1fb67-9479-49a5-beaa-0769f91ba7aa.jpg?v=1716532439&auto=format&fit=crop&w=1565&q=80"
                  alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                  className=" group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold capitalize text-red-600 group-hover:text-red-500">
                Custom Shape Tiki
              </h2>

              <p className="mt-2 text-md tracking-wider text-black  uppercase dark:text-white">
                From $50.00 USD
              </p>
              {/* <div className="absolute -z-50 inset-2 rounded-3xl bg-gradient-to-r from-red-600 via-rose-500 to-red-600 opacity-75 blur transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"></div> */}
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <Newsletter />
    </>
  );
};

export default Home;
