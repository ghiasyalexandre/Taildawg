import React from "react";

export default function EditorNav() {
  return (
    <>
      <div className="absolute pointer-events-none inset-0 h-32 flex items-center justify-center z-50">
        <a className="relative group">
          <img
            className="scale-50 pointer-events-auto hover:scale-60 transition-transform duration-500"
            src="./imgs/taildawg.avif"
            alt="Taildawg"
            draggable="false"
          />
          {/* Tooltip */}
          <div
            className="opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 
            rounded-md absolute right-0 top-16 z-100 mt-2 pointer-events-none"
          >
            Home
          </div>
        </a>
      </div>
    </>
  );
}
