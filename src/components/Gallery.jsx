import React from "react";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import TikiGallery from "./TikiGallery";
import GalleryImages from "./GalleryImages";
import { Link } from "react-router-dom";

const paddleImages = [
  "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Plague_Doctor_Custom_Shape_Paddle.png?v=1716527008",
  "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Takashi_Murakmi_Flower_Paddle.png?v=1716527264",
  "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Joker_Custom_Shape_Paddle.png?v=1716526923",
  "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Reyna_Valorant_Custom_Shape_Paddle.png?v=1716527132",
  "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Basketball_Player_Custom_Shape_Paddle.png?v=1716527049",
  "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Lelouch_Code_Geass_Paddle.png?v=1716171925",
  "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Otori-Sama_Paddle.png?v=1716171627",
];

const tikiImages = [
  "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Kuromi_Custom_Top_Tiki.png?v=1716417131",
  "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/My_Melody_Custom_Top_Tiki.png?v=1716417119",
  "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Cinnamoroll_Custom_Top_Tiki.png?v=1716417081",
  "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Dog_Custom_Top_Tiki.png?v=1716416951",
  "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Cat_Custom_Top_Tiki.png?v=1716417108",
  "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Berserk_Custom_Topper_Tiki.png?v=1716417009",
  "//taildawgproductions.com/cdn/shop/files/Togepi_Custom_Top_Tiki.png?v=1716416938",
  "//taildawgproductions.com/cdn/shop/files/Avatar_Appa_Momo_Custom_Top_Tiki.png?v=1716417045",
];

const Gallery = () => {
  return (
    <div>
      <div className="container px-6 pb-16 lg:pb-16 mx-auto">
        <div className="flex flex-col items-center gap-4 pb-4 pt-16 lg:pt-16 text-center">
          <h1 className="text-black dark:text-white font-semibold">
            View Our Products
          </h1>
          <span className="text-black dark:text-neutral-400 lg:text-lg">
            Below you will find our products ranging from Custom Paddles, Mirror
            Paddles, Custom Tikis, and more.
          </span>
          <Link to="/order" draggable={false}>
            <button>Order Now</button>
          </Link>
        </div>
        <hr className="my-10 mx-8 border-gray-200 dark:border-neutral-700" />

        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-black dark:text-white font-semibold">Paddles</h1>
          <span className="text-black dark:text-neutral-400 lg:text-lg max-w-6xl">
            We offer paddle customizations from custom shapes, mirror paddles,
            traditional paddles, and more. In addition to the woodwork
            production, we offer in house painting.
          </span>
        </div>

        <GalleryImages loadImages={paddleImages} />
        <div className="flex flex-col items-center gap-4 py-4 text-center">
          <h1 className="text-black dark:text-white font-semibold">Tikis</h1>
          <span className="text-black dark:text-neutral-400 lg:text-lg">
            Our tiki production ranges from custom shape tikis and custom
            toppers.
          </span>
        </div>
        {/* <GalleryImages loadImages={tikiImages} /> */}
        <TikiGallery />
      </div>

      <Newsletter />
    </div>
  );
};

export default Gallery;
