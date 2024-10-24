import React from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { useCustomization } from "../contexts/Customization";
import { Model } from "./Model";

export default function Letters(props) {
  const {
    material,
    shapeIndex,
    setShapeIndex,
    setLetter,
    paddles,
    baseColors,
    meshLetters,
    updateMeshLetter,
  } = useCustomization();

  const handleShapeIndexChange = (index) => {
    const newShapeIndex = index; //=== shapeIndex ? -1 : index; // Use -1 to deselect
    setShapeIndex(newShapeIndex);
  };

  const handleColorChange = (index, color) => {
    const newColors = baseColors[index] === "#ff0000" ? "#0000ff" : "#ff0000";
    newColors[index] = color; // Update the color for the specific mesh
    updateColors(newColors); // Set the new colors array
  };

  const barkTextureProps = useTexture({
    displacementMap: "./textures/Bark/Bark_06_height.png",
    normalMap: "./textures/Bark/Bark_06_normal.jpg",
    roughnessMap: "./textures/Bark/Bark_06_roughness.jpg",
    aoMap: "./textures/Bark/Bark_06_ambientOcclusion.jpg",
  });

  const woodTextureProps = useTexture({
    displacementMap: "./textures/Wood/Wood_027_height.png",
    normalMap: "./textures/Wood/Wood_027_normal.jpg",
    roughnessMap: "./textures/Wood/Wood_027_roughness.jpg",
    aoMap: "./textures/Wood/Wood_027_ambientOcclusion.jpg",
  });

  const setTextureProps = (textureProps, repeat) => {
    Object.keys(textureProps).forEach((key) => {
      if (textureProps[key] instanceof THREE.Texture) {
        textureProps[key].repeat.set(repeat[0], repeat[1]);
        textureProps[key].wrapS = THREE.RepeatWrapping;
        textureProps[key].wrapT = THREE.RepeatWrapping;
      }
    });
  };

  setTextureProps(barkTextureProps, [2, 2]);
  setTextureProps(woodTextureProps, [2, 2]);

  console.log(meshLetters, shapeIndex, baseColors);

  // Handle selecting a letter and updating the mesh letter
  const handleLetterClick = (item) => {
    //setLetter(item);
    console.log("Change to letter: ", shapeIndex, item);
    updateMeshLetter(shapeIndex, item);
  };

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} position={[0, 1, 0]} scale={1}>
        {meshLetters
          .slice()
          .reverse()
          .map((letter, index) => (
            <Model
              key={index}
              index={index}
              letter={letter}
              position={[0, 0, -index * 0.5]}
              onClick={() => {
                handleShapeIndexChange(index); // Call when model is clicked
                handleLetterClick(letter); // Update the letter when model is clicked
              }}
              colorProp={{
                color: baseColors[index] || "white", // Use baseColors for each shape
              }}
            />
          ))}
      </group>
    </group>
  );
}

// Preload all potential models in advance
// meshLetters.forEach((meshLetter) => {
//   try {
//     if (meshLetter) {
//       useGLTF.preload(`./models/${meshLetter}.glb`);
//     }
//   } catch (error) {
//     console.log("useGLTF Preload Failed: ", error);
//   }
// });

// useGLTF.preload(`./models/${meshLetters[0]}.glb`);
// useGLTF.preload(`./models/${meshLetters[1]}.glb`);
// useGLTF.preload(`./models/${meshLetters[2]}.glb`);
