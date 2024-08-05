import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Environment } from "@react-three/drei";
import { Model } from "./Model";
import { modelData } from "../utils/array";
import { useEffect, useState } from "react";
import { Background } from "../helper/Background";
import { handleKeyDown, handleKeyUp } from "../helper/Keyhandle";

export const Experience = () => {
  const [modAction, setModAction] = useState("normal");
  const moddata = modelData();
  const { floorColor, environment, modelAction } = useControls({
    floorColor: {
      value: "blue",
      options: ["red", "blue", "green", "yellow", "brown", "orange"]
    },
    environment: {
      value: "sunset",
      options: [
        "apartment", "city", "dawn", "forest", "lobby", "night", "park", "studio", "sunset", "warehouse"
      ]
    },
    modelAction: {
      value: "Dance",
      options: moddata
    }
  });

  useEffect(() => {
    const handleKeyDownEvent = (event) => handleKeyDown(event, setModAction);
    const handleKeyUpEvent = (event) => handleKeyUp(event, setModAction, modAction);

    window.addEventListener('keydown', handleKeyDownEvent);
    window.addEventListener('keyup', handleKeyUpEvent);

    return () => {
      window.removeEventListener('keydown', handleKeyDownEvent);
      window.removeEventListener('keyup', handleKeyUpEvent);
    };
  }, [modAction]);

  return (
    <>
      <OrbitControls />
      <Background />
      <Environment preset={environment} />
      <group>
        <Model mode={modAction} />
        <mesh position={[0, 0.005, 0]} scale={[4, 4, 4]} rotation-x={-Math.PI / 2}>
          <planeGeometry />
          <meshStandardMaterial color={floorColor} />
        </mesh>
      </group>
    </>
  );
};
