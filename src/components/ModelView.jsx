import React, { useRef, useEffect, useState, Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { letterList } from "../contexts/Customization";
import { Canvas, useThree } from "@react-three/fiber";
import {
  PresentationControls,
  Stage,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";

export function ModelView({ ...props }) {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [mediaItem, setMediaItem] = useState(letterList[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();

  const colors = [
    "#ff4757",
    "#3c40c6",
    "#f0f0f0",
    "#05c46b",
    "#ffa801",
    "#be2edd",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 10000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % letterList.length);
    }, 40000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const modelPath = `./models/${letterList[currentIndex].name}.glb`;
  console.log("Loading model:", modelPath);

  useGLTF.preload(modelPath);

  const { nodes, materials } = useGLTF(modelPath);

  return (
    <div className=" h-[300px] sm:h-[400px] lg:h-[375px] w-full py-2 px-2 lg:px-8">
      <Canvas
        ref={ref}
        camera={{ position: [0, 0, 5], zoom: 0.85 }}
        className="touch-none rounded-3xl shadow-lg shadow-black/50 dark:shadow-neonLight"
        gl={{ preserveDrawingBuffer: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#000"]} />
        {/* <fog attach="fog" args={["#101010", 10, 20]} /> */}

        <PresentationControls
          speed={1.5}
          global
          zoom={0.7}
          polar={[-0.25, Math.PI / 4]}
        >
          <Stage environment={"city"} intensity={0} contactShadow={false}>
            <Float
              speed={1}
              rotationIntensity={1}
              floatIntensity={1}
              floatingRange={[0, 0.05]}
            >
              <Suspense fallback={null}>
                <group {...props} dispose={null}>
                  <EffectComposer disableNormalPass>
                    <Bloom
                      mipmapBlur
                      luminanceThreshold={0.01}
                      levels={2}
                      intensity={1}
                    />
                    <ToneMapping />
                  </EffectComposer>
                  <mesh
                    castShadow
                    receiveShadow
                    position={[0, 0.15, 0]}
                    geometry={nodes[letterList[currentIndex].name].geometry}
                    material={materials[letterList[currentIndex].name]}
                    rotation={[0, -Math.PI / 2, 0]}
                  >
                    <meshStandardMaterial
                      color={colors[currentColorIndex]}
                      emissive={colors[currentColorIndex]}
                      emissiveIntensity={5}
                      roughness={0}
                      metalness={1}
                      resolution={2048}
                    />
                  </mesh>
                </group>
              </Suspense>
            </Float>
          </Stage>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 0]}>
            <planeGeometry args={[170, 170]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={1}
            />
          </mesh>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
