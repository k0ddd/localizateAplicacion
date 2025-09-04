import React, { useEffect, useImperativeHandle, useRef, forwardRef } from "react";
import * as fabric from "fabric"; // 👈 Import correcto en v6

export interface CanvasHandle {
  getCanvas: () => fabric.Canvas | null;
}

const Canvas = forwardRef<CanvasHandle>((_, ref) => {
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const htmlCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!htmlCanvasRef.current) return;

    const canvas = new fabric.Canvas(htmlCanvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: "#f3f3f3",
    });
    canvasRef.current = canvas;

    return () => {
      canvas.dispose();
    };
  }, []);

  useImperativeHandle(ref, () => ({
    getCanvas: () => canvasRef.current,
  }));

  return <canvas ref={htmlCanvasRef} />;
});

export default Canvas;
