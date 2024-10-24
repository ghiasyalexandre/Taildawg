import React, { useState, useEffect } from "react";
import "./GridGallery.css"; // Move the styles to an external CSS file

export default function PaddleGallery() {
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
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="gallery">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 lg:mb-11 mb-7">
              <div className="h-[300px] w-full rounded-3xl">
                <img
                  src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Plague_Doctor_Custom_Shape_Paddle.png?v=1716527008"
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl mx-auto w-auto h-full"
                  onClick={() =>
                    openLightbox(
                      "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Plague_Doctor_Custom_Shape_Paddle.png?v=1716527008"
                    )
                  }
                />
              </div>
              <div className="h-[300px] w-full rounded-3xl">
                <img
                  src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Takashi_Murakmi_Flower_Paddle.png?v=1716527264"
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl mx-auto w-auto h-full"
                  onClick={() =>
                    openLightbox(
                      "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Takashi_Murakmi_Flower_Paddle.png?v=1716527264"
                    )
                  }
                />
              </div>
              <div className="h-[300px] w-full rounded-3xl">
                <img
                  src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Joker_Custom_Shape_Paddle.png?v=1716526923"
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl mx-auto w-auto h-full"
                  onClick={() =>
                    openLightbox(
                      "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Joker_Custom_Shape_Paddle.png?v=1716526923"
                    )
                  }
                />
              </div>
            </div>
            <div className="flex flex-col mb-10">
              <div className="grid md:grid-cols-12 gap-8 lg:mb-11 mb-7">
                <div className="md:col-span-4 h-[300px]] w-full rounded-3xl">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Reyna_Valorant_Custom_Shape_Paddle.png?v=1716527132"
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl mx-auto lg:col-span-4 md:col-span-6 w-auto h-full"
                    onClick={() =>
                      openLightbox(
                        "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Reyna_Valorant_Custom_Shape_Paddle.png?v=1716527132"
                      )
                    }
                  />
                </div>
                <div className="md:col-span-8 md:h-[404px] h-[277px] w-full rounded-3xl">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Basketball_Player_Custom_Shape_Paddle.png?v=1716527049"
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl mx-auto lg:col-span-8 md:col-span-6 w-auto h-full"
                    onClick={() =>
                      openLightbox(
                        "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Basketball_Player_Custom_Shape_Paddle.png?v=1716527049"
                      )
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-6 md:h-[404px] h-[277px] w-full rounded-3xl">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Lelouch_Code_Geass_Paddle.png?v=1716171925"
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl mx-auto lg:col-span-4 md:col-span-6 w-auto h-full"
                    onClick={() =>
                      openLightbox(
                        "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Lelouch_Code_Geass_Paddle.png?v=1716171925"
                      )
                    }
                  />
                </div>
                <div className="md:col-span-6 md:h-[404px] h-[277px] w-full rounded-3xl">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Otori-Sama_Paddle.png?v=1716171627"
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl mx-auto lg:col-span-8 md:col-span-6 w-auto h-full"
                    onClick={() =>
                      openLightbox(
                        "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Otori-Sama_Paddle.png?v=1716171627"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
