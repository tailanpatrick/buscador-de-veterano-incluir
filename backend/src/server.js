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
    credentials: true, // Se for usar cookies ou autenticação
}));

// Tratamento da solicitação OPTIONS
app.options('*', cors()); // Responde a todas as requisições OPTIONS

app.use(express.json()); // Certifique-se de que o body das requisições está sendo tratado
app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
