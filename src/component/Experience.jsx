/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei"
import { Avatar } from "./Avatar"


export const Experience = () => {
  return (
    <>
    <OrbitControls/>
      <group position-y={-1}>
        <Avatar/>
      </group>
      <ambientLight intensity={1} />

    </>
  )
}
