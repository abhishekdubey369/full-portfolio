import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Environment } from "@react-three/drei";
import { Model } from "./Model";
import { modelData } from "../utils/array";
import { useEffect } from "react";

export const Experience = () => {
  const moddata  = modelData()
  const {floorColor,environment,modelAction} = useControls({
    floorColor:{
      value:"blue",
      options:["red","blue","green","yellow","brown","orange"]
    },
    environment:{
      value:"sunset",
      options:[
        "apartment", "city", "dawn", "forest", "lobby", "night", "park", "studio", "sunset", "warehouse"
      ]
    },
    modelAction:{
      value:"Dance",
      options:moddata
    }
  })
  return (
    <>
      <OrbitControls />
      <Environment preset={environment}/>
      <group>
        <Model mode={modelAction}/>
        <mesh position={[0,-0.25,0]} scale={[4,4,4]} rotation-x={-Math.PI/2}>
          <planeGeometry/>
          <meshStandardMaterial color={floorColor}/>
        </mesh>
      </group>
    </>
  );
};
