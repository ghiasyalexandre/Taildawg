/* Author: Ghiasy Alexandre */

import React from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { useCustomization } from "../contexts/Customization";

export default function Letters(props) {
  const { material, shapeIndex, letter, matColor, previousColor } =
    useCustomization();
  const { nodes, materials } = useGLTF(`./models/${letter.name}.glb`);

  const barkTextureProps = useTexture({
    //map: "./textures/Bark/Bark_06_basecolor.jpg",
    displacementMap: "./textures/Bark/Bark_06_height.png",
    normalMap: "./textures/Bark/Bark_06_normal.jpg",
    roughnessMap: "./textures/Bark/Bark_06_roughness.jpg",
    aoMap: "./textures/Bark/Bark_06_ambientOcclusion.jpg",
  });

  const woodTextureProps = useTexture({
    //map: "./textures/Wood/Wood_027_basecolor.jpg",
    displacementMap: "./textures/Wood/Wood_027_height.png",
    normalMap: "./textures/Wood/Wood_027_normal.jpg",
    roughnessMap: "./textures/Wood/Wood_027_roughness.jpg",
    aoMap: "./textures/Wood/Wood_027_ambientOcclusion.jpg",
  });

  // Setting texture repeats and wrapping
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

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        {Array.from({ length: 3 }).map((_, index) => (
          <mesh
            key={index}
            geometry={nodes[letter.symbol]?.geometry}
            position={[0, 0, -index * 0.54]} // Adjust the position for each mesh
          >
            <meshStandardMaterial
              {...(material === "bark" ? barkTextureProps : woodTextureProps)}
              color={
                shapeIndex === index
                  ? matColor.color
                  : previousColor[index] || "white"
              } // Change color based on shapeIndex
              castShadow
              receiveShadow
              //emissive={matColor.color}
            />
          </mesh>
        ))}
        {/* {nodes[letter.symbol] && ( */}
        {/* <mesh geometry={nodes[letter.symbol]?.geometry} position={[0, 0, -1]}>
          <meshStandardMaterial
            {...(material === "bark" ? barkTextureProps : woodTextureProps)}
            color={matColor.color && shapeIndex === 0}
            castShadow
            receiveShadow
            //emissive={matColor.color}
          />
        </mesh>
        <mesh geometry={nodes[letter.symbol]?.geometry} position={[0, 0, -0.5]}>
          <meshStandardMaterial
            {...(material === "bark" ? barkTextureProps : woodTextureProps)}
            color={matColor.color && shapeIndex === 1}
            castShadow
            receiveShadow
            //emissive={matColor.color}
          />
        </mesh>
        <mesh geometry={nodes[letter.symbol]?.geometry}>
          <meshStandardMaterial
            {...(material === "bark" ? barkTextureProps : woodTextureProps)}
            color={matColor.color && shapeIndex === 2}
            castShadow
            receiveShadow
            //emissive={matColor.color}
          />
        </mesh> */}
        {/* )} */}
      </group>
    </group>
  );
}

useGLTF.preload("./models/pi.gltf");
