const express = require("express");
const app = express();
const path = require("path");

const port = 5000;

// Configurar el directorio de archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta para servir el archivo HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}/`);
});
