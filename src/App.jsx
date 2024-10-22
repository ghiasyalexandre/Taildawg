import { Canvas } from "@react-three/fiber";
import Demo from "./components/Demo";
import Configurator from "./components/Configurator.tsx";
import { PerspectiveCamera } from "@react-three/drei";
import "./App.css";
import { CustomizationProvider } from "./contexts/Customization.jsx";
import EditorNav from "./components/EditorNav.jsx";

function App() {
  return (
    <>
      <CustomizationProvider>
        <div className="App">
          <EditorNav />
          <Canvas className="h-5/6" dpr={[1, 2]}>
            <color attach="background" args={["#101010"]} />
            <fog attach="fog" args={["#101010", 10, 20]} />
            <Demo />
          </Canvas>
          <Configurator />
        </div>
      </CustomizationProvider>
    </>
  );
}

export default App;
