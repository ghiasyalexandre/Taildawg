import React from "react";
import {
  letterList,
  matColors,
  useCustomization,
} from "../contexts/Customization";

export default function Configurator() {
  const {
    material,
    setMaterial,
    letter,
    setLetter,
    matColor,
    setMatColor,
    shapeIndex,
    setShapeIndex,
  } = useCustomization();
  console.log(material, shapeIndex, letter.name, matColor.name);
  return (
    <div className="configurator">
      <div className="configurator-section">
        <div className="configurator-section-title">Materials</div>
        <div className="configurator-section-values">
          <div
            className={`item ${material === "bark" ? "item--active" : ""}`}
            onClick={() => setMaterial("bark")}
          >
            <div className="item-label">Bark</div>
          </div>
          <div
            className={`item ${material === "wood" ? "item--active" : ""}`}
            onClick={() => setMaterial("wood")}
          >
            <div className="item-label">Wood</div>
          </div>
        </div>
      </div>
      <div className="configurator-section">
        <div className="configurator-section-title">Index</div>
        <div className="configurator-section-values">
          <div
            className={`item ${shapeIndex === 0 ? "item--active" : ""}`}
            onClick={() => setShapeIndex(0)}
          >
            <div className="item-label">1</div>
          </div>
          <div
            className={`item ${shapeIndex === 1 ? "item--active" : ""}`}
            onClick={() => setShapeIndex(1)}
          >
            <div className="item-label">2</div>
          </div>
          <div
            className={`item ${shapeIndex === 2 ? "item--active" : ""}`}
            onClick={() => setShapeIndex(2)}
          >
            <div className="item-label">3</div>
          </div>
        </div>
      </div>
      <div className="configurator-section">
        <div className="configurator-section-title">Letters</div>
        <div className="configurator-section-values">
          {letterList.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.name === letter.name ? "item--active" : ""
              }`}
              onClick={() => setLetter(item)}
            >
              <div className="item-label">{item.symbol}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator-section">
        <div className="configurator-section-title">Colors</div>
        <div className="configurator-section-values">
          {matColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === matColor.color ? "item--active" : ""
              }`}
              onClick={() => setMatColor(item)}
            >
              <div
                className="item-dot"
                style={{
                  backgroundColor: item.color,
                }}
              />
              <div className="item-label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
