// src/components/Toolbar.tsx
import React from "react";

interface ToolbarProps {
  addRectangle: () => void;
  addCircle: () => void;
  addEllipse: () => void;
  addLine: () => void;
  addPolygon: () => void;
  addText: () => void;
  addImage: (file: File) => void;
  deleteSelected: () => void;
  clearCanvas: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  addRectangle,
  addCircle,
  addEllipse,
  addLine,
  addPolygon,
  addText,
  addImage,
  deleteSelected,
  clearCanvas,
}) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={addRectangle}>▭ Rectángulo</button>
      <button onClick={addCircle}>◯ Círculo</button>
      <button onClick={addEllipse}>⬭ Elipse</button>
      <button onClick={addLine}>／ Línea</button>
      <button onClick={addPolygon}>🔺 Polígono</button>
      <button onClick={addText}>T Texto</button>
      <label style={{ cursor: "pointer" }}>
        📷 Subir imagen
        <input
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files && addImage(e.target.files[0])}
          style={{ display: "none" }}
        />
      </label>
      <button onClick={deleteSelected}>🗑 Eliminar seleccionado</button>
      <button onClick={clearCanvas}>❌ Borrar todo</button>
    </div>
  );
};

export default Toolbar;
