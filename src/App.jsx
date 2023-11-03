/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Experience } from "./component/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./component/Interface";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <Experience />
          <Scroll html className="main">
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
