import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const paddleList = [
  {
    name: "paddle",
  },
];

export const letterList = [
  // {
  //   name: "alpha",
  //   symbol: "Α",
  // },
  // {
  //   name: "beta",
  //   symbol: "Β",
  // },
  // {
  //   name: "gamma",
  //   symbol: "Γ",
  // },
  {
    name: "delta",
    symbol: "Δ",
  },
  // {
  //   name: "epsilon",
  //   symbol: "Ε",
  // },
  // {
  //   name: "zeta",
  //   symbol: "Ζ",
  // },
  // {
  //   name: "eta",
  //   symbol: "Η",
  // },
  // {
  //   name: "theta",
  //   symbol: "Θ",
  // },
  // {
  //   name: "iota",
  //   symbol: "Ι",
  // },
  // {
  //   name: "kappa",
  //   symbol: "Κ",
  // },
  // {
  //   name: "lambda",
  //   symbol: "Λ",
  // },
  // {
  //   name: "mu",
  //   symbol: "Μ",
  // },
  // {
  //   name: "nu",
  //   symbol: "Ν",
  // },
  // {
  //   name: "xi",
  //   symbol: "Ξ",
  // },
  // {
  //   name: "omicron",
  //   symbol: "Ο",
  // },
  {
    name: "pi",
    symbol: "Π",
  },
  // {
  //   name: "rho",
  //   symbol: "Ρ",
  // },
  // {
  //   name: "sigma",
  //   symbol: "Σ",
  // },
  // {
  //   name: "tau",
  //   symbol: "Τ",
  // },
  // {
  //   name: "upsilon",
  //   symbol: "Υ",
  // },
  // {
  //   name: "phi",
  //   symbol: "Φ",
  // },
  // {
  //   name: "chi",
  //   symbol: "Χ",
  // },
  {
    name: "psi",
    symbol: "Ψ",
  },
  // {
  //   name: "omega",
  //   symbol: "Ω",
  // },
];

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("wood");
  const [shapeIndex, setShapeIndex] = useState(0);
  const [letter, setLetter] = useState(letterList[15]);
  //const [paddles, setPaddles] = useState(letterList[23]);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [baseColors, setBaseColors] = useState([
    "#000000",
    "#ffffff",
    "#000000",
  ]);
  const [meshLetters, setMeshLetters] = useState([
    letterList[1],
    letterList[0],
    letterList[2],
  ]); // Initializing with indices for letterList

  const updateColors = (index, color) => {
    const updatedColors = [...baseColors];
    updatedColors[index] = color; // Update the color for the specific shape index
    setBaseColors(updatedColors);
  };

  const updateMeshLetter = (index, newLetter) => {
    const updatedMeshLetters = [...meshLetters];
    updatedMeshLetters[index] = newLetter;
    setMeshLetters(updatedMeshLetters);
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
        updateColors,
        selectedColor,
        setSelectedColor,
        baseColors,
        setBaseColors,
        meshLetters,
        setMeshLetters,
        updateMeshLetter,
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
