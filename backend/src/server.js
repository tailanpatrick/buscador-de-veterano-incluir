const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

// Configuração do CORS
app.use(cors({
    origin: 'https://buscador-de-veterano-incluir-front.vercel.app', // Permitir apenas o frontend
    methods: 'GET, POST, PUT, DELETE, OPTIONS', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeçalhos permitidos
    credentials: true // Se for usar cookies ou autenticação
}));

// Middleware para lidar com preflight requests (OPTIONS)
app.options('*', cors());

// Usar as rotas definidas
app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
