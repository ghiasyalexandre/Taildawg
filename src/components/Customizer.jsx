import React from "react";

import Demo from "./Demo.jsx";

import { Canvas, useFrame } from "@react-three/fiber";
import Configurator from "./Configurator.jsx";
import { Stats } from "@react-three/drei";
import { CustomizationProvider } from "../contexts/Customization.jsx";
import { useRef } from "react";

function Customizer(props) {
  const ref = useRef();

  function downloadScreenshot() {
    const image = ref.current.toDataURL("image/png");
    const a = document.createElement("a");
    a.setAttribute("download", "screenshot.png");
    a.setAttribute("href", image);
    a.click();
  }
  {
    return (
      <CustomizationProvider>
        <Canvas
          ref={ref}
          camera={{ position: [0, 0, 5] }}
          className="touch-none"
          gl={{ preserveDrawingBuffer: true }}
          dpr={[1, 2]}
        >
          <color attach="background" args={["#101010"]} />
          <fog attach="fog" args={["#101010", 10, 20]} />
          <Demo />
          {/* <Stats /> */}
        </Canvas>
        {/* <button
          id="button"
          className="static right-6 top-16  opacity-50 p-1 lg:p-2 lg:static lg:top-16 flex items-center text-neutral-700 hover:text-white"
          onClick={() => downloadScreenshot()}
        >
          Hidden on larger screens
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 block mr-2 mt-1 ml-4 lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
          </svg>

          Hidden on smaller screens
          <span className="hidden lg:block">Download Screenshot</span>
        </button> */}
        <Configurator />
      </CustomizationProvider>
    );
  }
}

export default Customizer;
