import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import mapasRouter from "./routes/mapas";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/mapas", mapasRouter);

mongoose.connect("mongodb://localhost:27017/localizateApp")
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
