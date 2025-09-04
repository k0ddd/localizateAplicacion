// src/App.tsx
import React, { useRef } from "react";
import * as fabric from "fabric"; // 👈 Import correcto en v6
import Canvas from "./components/Canvas";
import type { CanvasHandle } from "./components/Canvas";
import Toolbar from "./components/Toolbar";

const App: React.FC = () => {
  const canvasRef = useRef<CanvasHandle>(null);

  const getCanvas = () => canvasRef.current?.getCanvas();

  // ---------- TOOLBAR FUNCTIONS ----------

  const addRectangle = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const rect = new fabric.Rect({
      left: 100, top: 100, width: 120, height: 80,
      fill: "rgba(255,0,0,0.5)", stroke: "black", strokeWidth: 2,
    });
    canvas.add(rect);
  };

  const addCircle = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const circle = new fabric.Circle({
      left: 200, top: 200, radius: 50,
      fill: "rgba(0,0,255,0.5)", stroke: "black", strokeWidth: 2,
    });
    canvas.add(circle);
  };

  const addEllipse = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const ellipse = new fabric.Ellipse({
      left: 300, top: 200, rx: 60, ry: 40,
      fill: "rgba(0,255,0,0.5)", stroke: "black", strokeWidth: 2,
    });
    canvas.add(ellipse);
  };

  const addLine = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const line = new fabric.Line([50, 50, 200, 200], {
      stroke: "black", strokeWidth: 2,
    });
    canvas.add(line);
  };

  const addPolygon = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const polygon = new fabric.Polygon([
      { x: 50, y: 50 }, { x: 150, y: 50 }, { x: 100, y: 150 }
    ], { fill: "rgba(255,255,0,0.5)", stroke: "black", strokeWidth: 2 });
    canvas.add(polygon);
  };

  const addText = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const text = new fabric.Textbox("Texto", { left: 100, top: 300, fontSize: 20, fill: "black" });
    canvas.add(text);
  };

  const addImage = async (file: File) => {
    const canvas = getCanvas();
    if (!canvas) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const result = e.target?.result as string | null;
      if (!result) return;
      const img = await fabric.Image.fromURL(result);
      img.selectable = false;
      img.evented = false;
      canvas.backgroundImage = img;
      canvas.renderAll();
    };
    reader.readAsDataURL(file);
  };

  const deleteSelected = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const active = canvas.getActiveObject();
    if (active) canvas.remove(active);
  };

  const clearCanvas = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    canvas.clear();
  };

  // ---------- GUARDAR MAPA (PREPARADO PARA BACKEND) ----------

  const guardarMapa = async () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const mapaJSON = {
      nombre: "Mapa Hospital XYZ",
      planoBase64: canvas.backgroundImage?.toDataURL() || "",
      objetos: canvas.toJSON().objects,
    };
    console.log("Mapa listo para backend:", mapaJSON);
  };

  return (
    <div>
      <Toolbar
        addRectangle={addRectangle}
        addCircle={addCircle}
        addEllipse={addEllipse}
        addLine={addLine}
        addPolygon={addPolygon}
        addText={addText}
        addImage={addImage}
        deleteSelected={deleteSelected}
        clearCanvas={clearCanvas}
      />
      <button onClick={guardarMapa}>💾 Guardar Mapa</button>
      <Canvas ref={canvasRef} />
    </div>
  );
};

export default App;
