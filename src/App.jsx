/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Experience } from "./component/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./component/Interface";
import { useEffect, useState } from "react";
import { ScrollManager } from "./component/ScrollManager";
import { Menu } from "./component/Menu";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { framerMotionConfig } from "./Config";


function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(()=>{
    setMenuOpened(false)
},[section])

  return (
    <>
    <MotionConfig transition={{
      ...framerMotionConfig
    }}>
      <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
        <color attach="background" args={["#e6fe7ff"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll>
          <Experience section={section} menuOpened={menuOpened} />
          </Scroll>
          <Scroll html className="main">
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </MotionConfig>
    <Leva hidden/>
    </>
  );
}

export default App;
