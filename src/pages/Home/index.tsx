import { useEffect, useRef, useState } from "react";
import { init, render } from "react-canvaskit";
import SkiaMainCanvas from "./SkiaMainCanvas";
const Home = () => {
  const [ckLoaded, setCkloaded] = useState(false);
  const canvas = useRef(null);
  useEffect(() => {
    init()
      .then(() => {
        setCkloaded(true);
      })
      .catch(() => {
        setCkloaded(false);
      });
  }, []);

  useEffect(() => {
    canvas.current && render(<SkiaMainCanvas />, canvas.current);
  }, [ckLoaded]);

  useEffect(() => {
    if (canvas.current) {
      const canvasDom = canvas.current as HTMLCanvasElement;
      canvasDom.addEventListener("mousemove", (e) => {
        console.log("✅ ~ mousemove e:", e);
      });

      canvasDom.addEventListener("mousedown", (e) => {
        console.log("✅ ~ mousedown e:", e);
      });
    }
  }, [ckLoaded]);

  return ckLoaded ? (
    <div className="App" style={{ overflow: "hidden" }}>
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        ref={canvas}
        id="canvas"
      ></canvas>
    </div>
  ) : null;
};

export default Home;
