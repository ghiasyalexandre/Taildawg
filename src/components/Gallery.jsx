import React from "react";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import TikiGallery from "./TikiGallery";
import PaddleGallery from "./PaddleGallery";

const Gallery = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-4 pb-4 pt-16 lg:pt-16 text-center">
        <h1>View Our Products</h1>
        <span className="text-black dark:text-neutral-400">
          Below you will find our products ranging from Custom Paddles, Mirror
          Paddles, Custom Tikis, and more.
        </span>
        <button>Order Now</button>
      </div>
      <hr class="my-10 border-gray-200 dark:border-neutral-700" />

      <div className="flex flex-col items-center gap-4 pt-8 text-center">
        <h1>Paddles</h1>
        <span className="text-black dark:text-neutral-400">
          We offer paddle customizations from custom shapes, mirror paddles,
          traditional paddles, and more. In addition to the woodwork production,
          we offer in house painting.
        </span>
      </div>

      <PaddleGallery />
      <div className="flex flex-col items-center gap-4 py-4 text-center">
        <h1>Tikis</h1>
        <span className="text-black dark:text-neutral-400">
          Our tiki production ranges from custom shape tikis and custom toppers.
        </span>
      </div>
      <TikiGallery />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Gallery;
