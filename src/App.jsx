import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { LoadingScreen } from "./helper/LoadingScreen";
import Navigation from "./components/Navigation";
import { Suspense, useEffect, useState } from "react";
import { Interface } from "./helper/Interface";
import { Leva } from "leva";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./utils/config";

function App() {

    const [section, setSection] = useState(0);
    const [started, setStarted] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
      setMenuOpened(false);
    }, [section]);

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />

      {
        started && (
          <Navigation setMenuOpened={setMenuOpened} setSection={setSection} menuOpened={menuOpened} />
        )
      }
      {
        started && (
          <color attach="background" args={["#feabces"]}  />
        )
      }
      <MotionConfig
        transition={{
          ...framerMotionConfig
        }}>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 60 }}>
        <ScrollControls pages={4} damping={0.1}>
          <Scroll>
            <Suspense>
                {started && (
                  <Experience section={section} menuOpened={menuOpened} />
                )}
              </Suspense>
          </Scroll>
          <Scroll html>
          <Scroll html>
              {started && <Interface setSection={setSection} />}
            </Scroll>
          </Scroll>
        </ScrollControls>
      </Canvas>
      </MotionConfig>
      <Leva hidden/>
    </>
  );
}

export default App;
