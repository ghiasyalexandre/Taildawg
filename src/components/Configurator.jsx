import React, { useCallback } from "react";
import { letterList, useCustomization } from "../contexts/Customization";

const Configurator = React.memo(() => {
  const {
    material,
    setMaterial,
    shapeIndex,
    letter,
    setLetter,
    baseColors,
    setBaseColors,
    meshLetters,
    updateMeshLetter,
  } = useCustomization();

  // Handle color change for the selected shape
  const handleColorChange = useCallback(
    (e) => {
      const newColor = e.target.value;

      if (shapeIndex !== -1) {
        setBaseColors((prevColors) => {
          const updatedColors = [...prevColors];
          updatedColors[shapeIndex] = newColor;
          return updatedColors;
        });
      }
    },
    [shapeIndex, setBaseColors]
  );

  // Handle selecting material type
  const handleMaterialClick = useCallback(
    (selectedMaterial) => {
      setMaterial(selectedMaterial);
    },
    [setMaterial]
  );

  return (
    <div className="fixed pointer-events-none w-80 left-4 bottom-4 text-white flex flex-col p-4 gap-6">
      {/* Color Picker */}
      <div className="pt-4">
        <div className="font-bold uppercase">Color</div>
        <input
          className="w-20 h-20 pointer-events-auto cursor-pointer flex align-middle mt-2"
          type="color"
          value={baseColors[shapeIndex] || "#000000"}
          onChange={handleColorChange}
        />
      </div>

      {/* Material Selector */}
      <div className="pt-1">
        <div className="font-bold uppercase">Materials</div>
        <div className="flex align-middle gap-4 mt-2 flex-wrap">
          {["bark", "wood"].map((mat) => (
            <div
              key={mat}
              className={`item pointer-events-auto ${
                material === mat ? "item--active" : ""
              }`}
              onClick={() => handleMaterialClick(mat)}
            >
              <div className="item-label">
                {mat.charAt(0).toUpperCase() + mat.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Letter Selector */}
      <div className="pt-1">
        <div className="font-bold uppercase">Letters</div>
        <div className="flex align-middle gap-4 mt-2 flex-wrap">
          {letterList.map((item, index) => (
            <div
              key={item.name}
              className={`flex pointer-events-auto relative item ${
                item.name === letter.name ? "item--active" : ""
              }`}
              onClick={() => setLetter(item)}
            >
              <div className="item-label relative cursor-pointer">
                {item.symbol}
                {/* Tooltip */}
                <div
                  className="tooltip-content hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 
                    rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 z-10 pointer-events-none"
                >
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Configurator;
