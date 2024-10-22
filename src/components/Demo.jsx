import * as THREE from "three";
import { Suspense, useLayoutEffect } from "react";
import {
  useGLTF,
  MeshReflectorMaterial,
  Float,
  Stage,
  PresentationControls,
} from "@react-three/drei";

import Letters from "./Letters";

export default function Demo() {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.1, Math.PI / 3]}
    >
      <Stage environment={"city"} intensity={0.6} contactShadow={false}>
        <Suspense>
          <Float
            speed={1}
            rotationIntensity={1}
            floatIntensity={1}
            floatingRange={[0, 0.25]}
          >
            <Letters />
          </Float>
        </Suspense>
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.75, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
}
