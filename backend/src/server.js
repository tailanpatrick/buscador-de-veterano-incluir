const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv').config();

const app = express();

// Middleware para lidar com OPTIONS
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', 'https://buscador-de-veterano-incluir-front.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.sendStatus(200); // Respondendo com 200 OK para requisições preflight
  }
  next();
});

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
