import { useEffect, useRef } from "react";
import * as fabric from "fabric";

interface CanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  setCanvas: (canvas: fabric.Canvas) => void;
}

export default function Canvas({ canvasRef, setCanvas }: CanvasProps) {
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: "#f3f3f3",
    });

    setCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div className="flex justify-center p-4">
      <canvas ref={canvasRef} />
    </div>
  );
}
