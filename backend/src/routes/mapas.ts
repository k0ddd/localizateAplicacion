import { Router } from "express";
import { Mapa } from "../models/Mapa";

const router = Router();

// Crear un mapa
router.post("/", async (req, res) => {
  try {
    const mapa = await Mapa.create(req.body);
    res.status(201).json(mapa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// Obtener un mapa por ID
router.get("/:id", async (req, res) => {
  try {
    const mapa = await Mapa.findById(req.params.id);
    res.json(mapa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

export default router;
