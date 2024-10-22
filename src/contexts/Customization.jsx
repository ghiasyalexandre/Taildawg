import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const matColors = [
  {
    color: "#ececec",
    name: "white",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#70110C",
    name: "crimson",
  },
  {
    color: "#892222",
    name: "red",
  },
  {
    color: "#4169e1",
    name: "blue",
  },
  {
    color: "#5A357F",
    name: "purple",
  },
  {
    color: "#CCBDE5",
    name: "mauve",
  },
  {
    color: "#FA8072",
    name: "pink",
  },
  {
    color: "#76CD26",
    name: "lime",
  },
  {
    color: "#c39439",
    name: "yellow",
  },
  {
    color: "#b58037",
    name: "gold",
  },
  {
    color: "#512D1E",
    name: "brown",
  },
  {
    color: "#FFFDD0",
    name: "cream",
  },
];

export const letterList = [
  {
    name: "pi",
    symbol: "π",
  },
  {
    name: "DELTA",
    symbol: "Text",
  },
  {
    name: "PSI",
    symbol: "ψ",
  },
];

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("wood");
  const [shapeIndex, setShapeIndex] = useState(0);
  const [letter, setLetter] = useState(letterList[0]);
  const [matColor, setMatColor] = useState(matColors[0]);
  const [previousColor, setPreviousColor] = useState([
    "white",
    "white",
    "white",
  ]);

  const updateColor = (index, color) => {
    const matColor = [...previousColor];
    matColor[index] = color; // Update the color for the specific shape index
    setPreviousColors(matColor);
  };

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        shapeIndex,
        setShapeIndex,
        letter,
        setLetter,
        matColor,
        setMatColor,
        previousColor,
        setPreviousColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
