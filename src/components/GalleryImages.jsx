import React, { useState, useEffect } from "react";
import "./GridGallery.css"; // Move the styles to an external CSS file

export default function GalleryImages({ loadImages }) {
  const [isModalOpen, setIsModalOpen] = useState(
    Array(loadImages.length).fill(false)
  );

  const openModal = (index) => {
    setIsModalOpen((prev) =>
      prev.map((item, i) => (i === index ? true : item))
    );
  };

  const closeModal = (index) => {
    setIsModalOpen((prev) =>
      prev.map((item, i) => (i === index ? false : item))
    );
  };

  return (
    <>
      <section className="py-6">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gallery">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3 gap-y-6 lg:mb-11 mb-7">
              {loadImages.map((placedImage, index) => (
                <div key={index}>
                  {/* Image container */}
                  <div className="h-[290px] sm:h-[230px] md:h-[200px] lg:h-[270px] xl:h-[350px] w-full y-spin">
                    <img
                      src={placedImage}
                      alt="Gallery image"
                      draggable={false}
                      className="gallery-image object-cover mx-auto w-auto h-full cursor-pointer"
                      onClick={() => openModal(index)}
                    />
                  </div>

                  {/* Modal */}
                  {isModalOpen[index] && (
                    <div
                      className=" container mx-auto fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
                      onClick={() => closeModal(index)} // Close modal when clicking on background
                    >
                      <div
                        className="relative p-4 rounded-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the image container
                      >
                        <button
                          className=" text-3xl scale-50 sm:scale-75 lg:scale-100 absolute top-2 right-2 text-gray-700 hover:text-red-600 transition ease-in-out"
                          onClick={() => closeModal(index)}
                        >
                          &times;
                        </button>
                        <img
                          src={placedImage}
                          alt="Gallery image"
                          className="w-full h-auto max-w-[80vw] max-h-[80vh]"
                          draggable={false}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
