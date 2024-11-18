import React from "react";
import "./GridGallery.css"; // Move the styles to an external CSS file
import Newsletter from "./Newsletter";

export default function Order() {
  return (
    <>
      <section className="py-16 pb-4 container px-6 mx-auto">
        <div className="flex justify-center text-center font-semibold text-black dark:text-white">
          <h1>All Products</h1>
        </div>
        <hr className="my-10 mx-4 sm:mx-6 lg:mx-8 border-gray-200 dark:border-neutral-700" />

        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="gallery">
            <div className="grid xs:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 lg:mb-11 mb-7">
              <div className="relative h-[277px] group w-full rounded-3xl shadow-lg shadow-black/50 dark:shadow-white/30">
                <div className="overflow-hidden w-full h-full rounded-3xl">
                  <img
                    src="//taildawgproductions.com/cdn/shop/files/Product_Wood_Background_Custom_Top_Paddle.png?v=1716533687&width=533"
                    alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                    className=" group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-left pl-4 py-2 rounded-b-3xl">
                  <h2 className="text-sm">Custom Top Paddle Inquiry</h2>
                  <p>$0.00 USD</p>
                </div>
                <div className="absolute -z-50 inset-2 rounded-3xl bg-gradient-to-r from-red-600 via-rose-500 to-red-600 opacity-0 blur transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"></div>
              </div>
              <div className="relative h-[277px] group w-full rounded-3xl shadow-lg shadow-black/50 dark:shadow-white/30">
                <div className="overflow-hidden w-full h-full rounded-3xl ">
                  <img
                    src="//taildawgproductions.com/cdn/shop/files/Reyna_Wood_Background_Paddle.png?v=1716531932&width=533"
                    alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                    className=" group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-left pl-4 py-2 rounded-b-3xl">
                  <h2 className="text-sm">Custom Shape Paddle Inquiry</h2>
                  <p>$0.00 USD</p>
                </div>
                <div className="absolute -z-50 inset-2 rounded-3xl bg-gradient-to-r from-red-600 via-rose-500 to-red-600 opacity-75 blur transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"></div>
              </div>
              <div className="relative h-[277px] group w-full rounded-3xl shadow-lg shadow-black/50 dark:shadow-white/30">
                <div className="overflow-hidden w-full h-full rounded-3xl">
                  <img
                    src="//taildawgproductions.com/cdn/shop/files/Untitled_Artwork_20.png?v=1717219647&width=533"
                    alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                    className=" group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-left pl-4 py-2 rounded-b-3xl">
                  <h2 className="text-sm">Traditional Wooden Tiki</h2>
                  <p>$25.00 USD</p>
                </div>
                <div className="absolute -z-50 inset-2 rounded-3xl bg-gradient-to-r from-red-600 via-rose-500 to-red-600 opacity-75 blur transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"></div>
              </div>

              <div className="relative h-[277px] group w-full rounded-3xl shadow-lg shadow-black/50 dark:shadow-white/30">
                <div className="overflow-hidden w-full h-full rounded-3xl">
                  <img
                    src="//taildawgproductions.com/cdn/shop/files/Product_Wood_Background_Tikis.png?v=1716532546&width=533"
                    alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                    className=" group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-left pl-4 py-2 rounded-b-3xl">
                  <h2 className="text-sm">Custom Top Tiki</h2>
                  <p>$40.00 USD</p>
                </div>
                <div className="absolute -z-50 inset-2 rounded-3xl bg-gradient-to-r from-red-600 via-rose-500 to-red-600 opacity-75 blur transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"></div>
              </div>
              <div className="relative h-[277px] group w-full rounded-3xl shadow-lg shadow-black/50 dark:shadow-white/30">
                <div className="overflow-hidden w-full h-full rounded-3xl">
                  <img
                    src="http://taildawgproductions.com/cdn/shop/files/PDPsi_Berserk_Custom_Shape_Tiki_b3d1fb67-9479-49a5-beaa-0769f91ba7aa.jpg?v=1716532439&auto=format&fit=crop&w=1565&q=80"
                    alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                    className="group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-left pl-4 py-2 rounded-b-3xl">
                    <h2 className="text-sm">Custom Shape Tiki</h2>
                    <p>$50.00 USD</p>
                  </div>
                </div>
                <div className="absolute -z-50 inset-2 rounded-3xl bg-gradient-to-r from-red-600 via-rose-500 to-red-600 opacity-75 blur transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"></div>
              </div>
              <div className="relative h-[277px] group w-full rounded-3xl shadow-lg shadow-black/50 dark:shadow-white/30">
                <div className="overflow-hidden w-full h-full rounded-3xl">
                  <img
                    src="//taildawgproductions.com/cdn/shop/files/Untitled_Artwork_21_2ddba306-e1e1-439c-a5ff-309ef6f3a4bc.png?v=1717282269&width=1445"
                    alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                    className=" group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-left pl-4 py-2 rounded-b-3xl">
                  <h2 className="text-sm">Traditional Wooden Paddle Inquiry</h2>
                  <p>$0.00 USD</p>
                </div>
                <div className="absolute -z-50 inset-2 rounded-3xl bg-gradient-to-r from-red-600 via-rose-500 to-red-600 opacity-75 blur transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
