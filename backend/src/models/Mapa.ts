import { Schema, model } from "mongoose";

const mapaSchema = new Schema({
  nombre: { type: String, required: true },
  planoBase64: { type: String },      // Imagen del plano en Base64
  objetos: { type: Array, default: [] }, // JSON de Fabric.js
  fechaCreacion: { type: Date, default: Date.now },
});

export const Mapa = model("Mapa", mapaSchema);
