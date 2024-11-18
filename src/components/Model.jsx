import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model({ letter, colorProp, ...props }) {
  // Check if letter object has the name property
  if (!letter || !letter.name) {
    console.error("Invalid letter object or missing name property:", letter);
    return null; // Safeguard against invalid letter
  }

  const modelPath = `./models/${letter.name}.glb`;
  //console.log(index, "Loading model:", modelPath); // Log the model path for debugging

  // Preload the GLTF model to improve performance
  useGLTF.preload(modelPath);

  // Load the GLTF model based on the letter name
  const { nodes, materials } = useGLTF(modelPath);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[letter.name]?.geometry}
        material={materials[letter.name]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
      >
        <meshStandardMaterial
          color={colorProp.color}
          emissive={colorProp.color}
        />
      </mesh>
    </group>
  );
}
