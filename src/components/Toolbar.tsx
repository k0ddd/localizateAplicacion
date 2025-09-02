import React from "react";

interface ToolbarProps {
  addRectangle: () => void;
  addCircle: () => void;
  addText: () => void;
  addLine: () => void;
  addPolygon: () => void;
  addEllipse: () => void;
  addImage: () => void;
}

export default function Toolbar({ addRectangle, addCircle, addText, addLine, addEllipse, addPolygon, addImage }: ToolbarProps) {
  return (
    <div className="flex gap-2 p-2 bg-gray-200 border-b">
      <button onClick={addRectangle} className="p-2 bg-blue-500 text-white rounded">
        Rectángulo
      </button>
      <button onClick={addCircle} className="p-2 bg-green-500 text-white rounded">
        Círculo
      </button>
      <button onClick={addText} className="p-2 bg-purple-500 text-white rounded">
        Texto
      </button>
      <button onClick={addLine} className="p-2 bg-yellow-500 text-white rounded">
        Línea
      </button>
    </div>
  );
}
