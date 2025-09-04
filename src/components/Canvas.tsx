// src/components/Canvas.tsx
import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  forwardRef,
} from "react";
import * as fabric from "fabric"; // 👈 Import correcto en v6

export interface CanvasHandle {
  getCanvas: () => fabric.Canvas | null;
}

const Canvas = forwardRef<CanvasHandle>((_, ref) => {
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const canvasContainer = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasContainer.current) return;

    const canvas = new fabric.Canvas(canvasContainer.current, {
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

  return <canvas ref={canvasContainer} />;
});

export default Canvas;
