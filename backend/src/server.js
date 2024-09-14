const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv').config();

const app = express();

const cors = require('cors');

// Definir múltiplas origens
const allowedOrigins = ['https://buscador-de-veterano-incluir-front.vercel.app', 'http://localhost:3001'];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir requisições sem origin (como apps mobile ou outras origens não definidas)
    if (!origin) return callback(null, true);
    
    // Verificar se a origem está na lista de permitidas
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'A origem ' + origin + ' não está permitida pelo CORS';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

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
