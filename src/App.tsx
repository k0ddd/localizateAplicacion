// src/App.tsx
import React, { useRef } from "react";
import * as fabric from "fabric";
import Canvas from "./components/Canvas";
import type { CanvasHandle } from "./components/Canvas";
import Toolbar from "./components/Toolbar";

const App: React.FC = () => {
  const canvasRef = useRef<CanvasHandle>(null);

  const guardarMapaHandler = async () => {
  const canvas = canvasRef.current?.getCanvas();
  if (!canvas) return;

  const mapaJSON = {
    nombre: "Mapa Hospital XYZ",
    planoBase64: "",           // aquí se pondrá la imagen de fondo
    objetos: canvas.toJSON().objects, // todos los objetos dibujados
  };

  // Si hay imagen de fondo, convertirla a Base64
  if (canvas.backgroundImage) {
    mapaJSON.planoBase64 = canvas.backgroundImage.toDataURL();
  }

  // Llamar a tu API para guardar en MongoDB
  const resp = await guardarMapa(mapaJSON);
  console.log("Mapa guardado:", resp);
};


  const addRectangle = () => {
    const canvas = canvasRef.current?.getCanvas();
    if (!canvas) return;

    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 120,
      height: 80,
    });
    canvas.add(rect);
  };

  const addCircle = () => {
    const canvas = canvasRef.current?.getCanvas();
    if (!canvas) return;

    const circle = new fabric.Circle({
      left: 200,
      top: 200,
      radius: 50,
      fill: "blue",
    });
    canvas.add(circle);
  };

  const addLine = () => {
    const canvas = canvasRef.current?.getCanvas();
    if (!canvas) return;

    const line = new fabric.Line([50, 50, 200, 200], {
      stroke: "black",
      strokeWidth: 2,
    });
    canvas.add(line);
  };

  const addText = () => {
    const canvas = canvasRef.current?.getCanvas();
    if (!canvas) return;

    const text = new fabric.Textbox("Texto", {
      left: 300,
      top: 300,
      fontSize: 20,
    });
    canvas.add(text);
  };

  const addImage = (file: File) => {
    const canvas = canvasRef.current?.getCanvas();
    if (!canvas) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target?.result) return;
      fabric.Image.fromURL(e.target.result as string, (img) => {
        img.set({ left: 100, top: 100, scaleX: 0.5, scaleY: 0.5 });
        canvas.add(img);
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Toolbar
        addRectangle={addRectangle}
        addCircle={addCircle}
        addLine={addLine}
        addText={addText}
        addImage={addImage}
      />
      <button onClick={guardarMapaHandler}>💾 Guardar Mapa</button>
      <Canvas ref={canvasRef} />
    </div>
  );
};

export default App;
