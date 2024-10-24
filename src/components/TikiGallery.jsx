import React, { useState, useEffect } from "react";
import "./GridGallery.css"; // Move the styles to an external CSS file

export default function TikiGallery() {
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="gallery">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 lg:mb-11 mb-7">
              <div className="h-[277px] w-full rounded-3xl">
                <img
                  src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Kuromi_Custom_Top_Tiki.png?v=1716417131"
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl mx-auto w-auto h-full"
                  onClick={() =>
                    openLightbox(
                      "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Kuromi_Custom_Top_Tiki.png?v=1716417131"
                    )
                  }
                />
              </div>
              <div className="h-[277px] w-full rounded-3xl">
                <img
                  src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/My_Melody_Custom_Top_Tiki.png?v=1716417119"
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl mx-auto w-auto h-full"
                  onClick={() =>
                    openLightbox(
                      "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/My_Melody_Custom_Top_Tiki.png?v=1716417119"
                    )
                  }
                />
              </div>
              <div className="h-[277px] w-full rounded-3xl">
                <img
                  src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Cinnamoroll_Custom_Top_Tiki.png?v=1716417081"
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl mx-auto w-auto h-full"
                  onClick={() =>
                    openLightbox(
                      "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Cinnamoroll_Custom_Top_Tiki.png?v=1716417081"
                    )
                  }
                />
              </div>
              <div className="h-[277px] w-full rounded-3xl">
                <img
                  src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Dog_Custom_Top_Tiki.png?v=1716416951"
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl mx-auto w-auto h-full"
                  onClick={() =>
                    openLightbox(
                      "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Dog_Custom_Top_Tiki.png?v=1716416951"
                    )
                  }
                />
              </div>
              <div className="h-[277px] w-full rounded-3xl">
                <img
                  src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Cat_Custom_Top_Tiki.png?v=1716417108"
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl mx-auto w-auto h-full"
                  onClick={() =>
                    openLightbox(
                      "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Cat_Custom_Top_Tiki.png?v=1716417108"
                    )
                  }
                />
              </div>
              <div className="h-[277px] w-full rounded-3xl">
                <img
                  src="https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Berserk_Custom_Topper_Tiki.png?v=1716417009"
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl mx-auto w-auto h-full"
                  onClick={() =>
                    openLightbox(
                      "https://cdn.shopify.com/s/files/1/0638/0339/2177/files/Berserk_Custom_Topper_Tiki.png?v=1716417009"
                    )
                  }
                />
              </div>
              <div className="h-[277px] w-full rounded-3xl">
                <img
                  src="//taildawgproductions.com/cdn/shop/files/Togepi_Custom_Top_Tiki.png?v=1716416938"
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl mx-auto w-auto h-full"
                  onClick={() =>
                    openLightbox(
                      "//taildawgproductions.com/cdn/shop/files/Togepi_Custom_Top_Tiki.png?v=1716416938"
                    )
                  }
                />
              </div>
              <div className="h-[277px] w-full rounded-3xl">
                <img
                  src="//taildawgproductions.com/cdn/shop/files/Avatar_Appa_Momo_Custom_Top_Tiki.png?v=1716417045"
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl mx-auto w-auto h-full"
                  onClick={() =>
                    openLightbox(
                      "//taildawgproductions.com/cdn/shop/files/Avatar_Appa_Momo_Custom_Top_Tiki.png?v=1716417045"
                    )
                  }
                />
              </div>
              <div className="h-[277px] w-full rounded-3xl">
                <img
                  src="//taildawgproductions.com/cdn/shop/files/Untitled_Artwork_20.png?v=1717219647"
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl mx-auto w-auto h-full"
                  onClick={() =>
                    openLightbox(
                      "//taildawgproductions.com/cdn/shop/files/Untitled_Artwork_20.png?v=1717219647"
                    )
                  }
                />
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
