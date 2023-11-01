/* eslint-disable react/no-unknown-property */
import {
  // ContactShadows,
  // Environment,
  OrbitControls,
  // Sky,
} from "@react-three/drei";
import { Office } from "./Office";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Standing", "Falling"],
    },
  });

  return (
    <>
      <OrbitControls />
      {/* <Sky /> */}
      {/* <Environment preset="sunset" /> */}
      <Office/>
      <group position-y={0}>
        {/* <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
       
        {animation === "Typing" && (
          <mesh scale={[0.7, 0.4, 0.7]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>
        )}
        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh> */}
         <Avatar animation={animation} />
        <ambientLight intensity={1} />
      </group>
    </>
  );
};
