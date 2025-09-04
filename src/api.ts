const API_URL = "http://localhost:5000/mapas";

const guardarMapa = async (mapaData: any) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mapaData),
    });
    return res.json();
  } catch (err) {
    console.error("Error guardando mapa:", err);
  }
};
