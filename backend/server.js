const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Datos simulados
let tapas = [
  { id: "1", nombre: "Tapa de Pulpo", votos: 120 },
  { id: "2", nombre: "Croquetas de Jamón", votos: 90 },
  { id: "3", nombre: "Tortilla Española", votos: 75 },
  { id: "4", nombre: "Empanada Gallega", votos: 45 },
];

// Ruta principal
app.get("/", (req, res) => {
  res.send("Servidor de Ganxotapa corriendo correctamente");
});

// Rutas
app.get("/tapas", (req, res) => {
  res.json(tapas);
});

app.post("/votar", (req, res) => {
  const { id } = req.body;
  const tapa = tapas.find((t) => t.id === id);

  if (tapa) {
    tapa.votos += 1;
    res.json({ message: "Voto registrado", tapas });
  } else {
    res.status(404).json({ message: "Tapa no encontrada" });
  }
});

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

