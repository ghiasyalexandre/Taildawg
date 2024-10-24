import React, { useState, useEffect } from "react";
import "./GridGallery.css"; // Move the styles to an external CSS file
import Newsletter from "./Newsletter";
import Footer from "./Footer";

export default function Order() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageSrc, setLightboxImageSrc] = useState("");

  // Function to open the lightbox
  const openLightbox = (src) => {
    setLightboxImageSrc(src);
    setLightboxOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    // Close lightbox when clicking outside the image
    const handleClickOutside = (e) => {
      if (e.target.id === "lightbox") {
        closeLightbox();
      }
    };

    if (lightboxOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [lightboxOpen]);

  return (
    <>
      <section className="pt-12 pb-4">
        <div className="flex justify-center pb-8">
          <h1>All Products</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="gallery">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 lg:mb-11 mb-7">
              <div className="relative h-[277px] group w-full rounded-3xl ">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 overflow-hidden  transition duration-500 group-hover:opacity-100">
                  <img
                    src="//taildawgproductions.com/cdn/shop/files/Product_Wood_Background_Custom_Top_Paddle.png?v=1716533687&width=1445"
                    alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                    className="group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                    onClick={() =>
                      openLightbox(
                        "//taildawgproductions.com/cdn/shop/files/Product_Wood_Background_Custom_Top_Paddle.png?v=1716533687&width=1445"
                      )
                    }
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-left pl-4 py-2 rounded-b-3xl">
                    <h2 className="text-sm">Custom Top Paddle Inquiry</h2>
                    <p>$0.00 USD</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[277px] group overflow-hidden w-full rounded-3xl">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>

                <img
                  src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Reyna_Valorant_Custom_Shape_Paddle.png?v=1716527132"
                  alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                  className="relative group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                  onClick={() =>
                    openLightbox(
                      "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Reyna_Valorant_Custom_Shape_Paddle.png?v=1716527132"
                    )
                  }
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-left pl-4 py-2 rounded-b-3xl">
                  <h2 className="text-sm">Custom Shape Paddle Inquiry</h2>
                  <p>$0.00 USD</p>
                </div>
              </div>
              <div className="relative h-[277px] group overflow-hidden w-full rounded-3xl">
                <img
                  src="//taildawgproductions.com/cdn/shop/files/Untitled_Artwork_20.png?v=1717219647"
                  alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                  className="group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                  onClick={() =>
                    openLightbox(
                      "//taildawgproductions.com/cdn/shop/files/Untitled_Artwork_20.png?v=1717219647"
                    )
                  }
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-left pl-4 py-2 rounded-b-3xl">
                  <h2 className="text-sm">Traditional Wooden Tiki</h2>
                  <p>$25.00 USD</p>
                </div>
              </div>
              <div className="relative h-[277px] group overflow-hidden w-full rounded-3xl">
                <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-none group-hover:before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-rose-400 before:via-fuchsia-500 before:to-indigo-500 before:opacity-0 group-hover:before:opacity-100 before:transition before:duration-500 before:blur-sm"></div>

                <img
                  src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Reyna_Valorant_Custom_Shape_Paddle.png?v=1716527132"
                  alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                  className="relative group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                  onClick={() =>
                    openLightbox(
                      "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Reyna_Valorant_Custom_Shape_Paddle.png?v=1716527132"
                    )
                  }
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-left pl-4 py-2 rounded-b-3xl">
                  <h2 className="text-sm">Custom Shape Paddle Inquiry</h2>
                  <p>$0.00 USD</p>
                </div>
              </div>

              <div className="relative h-[277px] group overflow-hidden w-full rounded-3xl">
                <img
                  src="//taildawgproductions.com/cdn/shop/files/Product_Wood_Background_Tikis.png?v=1716532546&width=533"
                  alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                  className="group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                  onClick={() =>
                    openLightbox(
                      "//taildawgproductions.com/cdn/shop/files/Product_Wood_Background_Tikis.png?v=1716532546&width=533"
                    )
                  }
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-left pl-4 py-2 rounded-b-3xl">
                  <h2 className="text-sm">Custom Top Tiki</h2>
                  <p>$40.00 USD</p>
                </div>
              </div>
              <div className="relative h-[277px] group overflow-hidden w-full rounded-3xl">
                <img
                  src="http://taildawgproductions.com/cdn/shop/files/PDPsi_Berserk_Custom_Shape_Tiki_b3d1fb67-9479-49a5-beaa-0769f91ba7aa.jpg?v=1716532439&auto=format&fit=crop&w=1565&q=80"
                  alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                  className="group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                  onClick={() =>
                    openLightbox(
                      "http://taildawgproductions.com/cdn/shop/files/PDPsi_Berserk_Custom_Shape_Tiki_b3d1fb67-9479-49a5-beaa-0769f91ba7aa.jpg?v=1716532439&auto=format&fit=crop&w=1565&q=80"
                    )
                  }
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-left pl-4 py-2 rounded-b-3xl">
                  <h2 className="text-sm">Custom Shape Tiki</h2>
                  <p>$50.00 USD</p>
                </div>
              </div>

              <div className="relative h-[277px] group w-full rounded-3xl">
                <div className="overflow-hidden w-full h-full rounded-3xl">
                  <img
                    src="//taildawgproductions.com/cdn/shop/files/Untitled_Artwork_21_2ddba306-e1e1-439c-a5ff-309ef6f3a4bc.png?v=1717282269&width=1445"
                    alt="Beautiful paddle design showcasing vibrant colors and sleek craftsmanship"
                    className=" group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover rounded-3xl mx-auto w-full h-full"
                    onClick={() =>
                      openLightbox(
                        "//taildawgproductions.com/cdn/shop/files/Untitled_Artwork_21_2ddba306-e1e1-439c-a5ff-309ef6f3a4bc.png?v=1717282269&width=1445"
                      )
                    }
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-left pl-4 py-2 rounded-b-3xl">
                  <h2 className="text-sm">Traditional Wooden Paddle Inquiry</h2>
                  <p>$0.00 USD</p>
                </div>
                <div class="absolute -z-50 -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"></div>
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
        <Footer />
        {/* Lightbox */}
        {lightboxOpen && (
          <div className="lightbox" id="lightbox">
            <span className="close" id="close" onClick={closeLightbox}>
              &times;
            </span>
            <img
              src={lightboxImageSrc}
              alt="Lightbox"
              className="lightbox-image"
            />
          </div>
        )}
      </section>
    </>
  );
}
