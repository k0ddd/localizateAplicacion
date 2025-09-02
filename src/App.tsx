import { useRef, useState } from "react";
import Canvas from "./components/Canvas";
import Toolbar from "./components/Toolbar";
import * as fabric from "fabric";

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  const addRectangle = () => {
    if (!canvas) return;
    const rect = new fabric.Rect({
      left: 50,
      top: 50,
      fill: "blue",
      width: 100,
      height: 100,
    });
    canvas.add(rect);
  };

  const addCircle = () => {
    if (!canvas) return;
    const circle = new fabric.Circle({
      left: 100,
      top: 100,
      fill: "green",
      radius: 50,
    });
    canvas.add(circle);
  };

  const addText = () => {
    if (!canvas) return;
    const text = new fabric.Textbox("Nuevo texto", {
      left: 150,
      top: 150,
      fontSize: 20,
      fill: "black",
    });
    canvas.add(text);
  };

  // NUEVO: agregar línea
  const addLine = () => {
    if (!canvas) return;
    const line = new fabric.Line([50, 50, 200, 200], {
      stroke: "red",
      strokeWidth: 3,
    });
    canvas.add(line);
  };

  return (
    <div>
      <Toolbar 
        addRectangle={addRectangle} 
        addCircle={addCircle} 
        addText={addText} 
        addLine={addLine} 
      />
      <Canvas canvasRef={canvasRef} setCanvas={setCanvas} />
    </div>
  );
}
