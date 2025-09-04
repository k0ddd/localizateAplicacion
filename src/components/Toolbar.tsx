// src/components/Toolbar.tsx
import React from "react";

interface ToolbarProps {
  addRectangle: () => void;
  addCircle: () => void;
  addLine: () => void;
  addText: () => void;
  addImage: (file: File) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  addRectangle,
  addCircle,
  addLine,
  addText,
  addImage,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      addImage(e.target.files[0]);
    }
  };

  return (
    <div style={{ marginBottom: "1rem", display: "flex", gap: "10px" }}>
      <button onClick={addRectangle}>⬛ Rectángulo</button>
      <button onClick={addCircle}>🔵 Círculo</button>
      <button onClick={addLine}>📏 Línea</button>
      <button onClick={addText}>📝 Texto</button>
      <label style={{ cursor: "pointer" }}>
        🖼️ Imagen
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default Toolbar;
