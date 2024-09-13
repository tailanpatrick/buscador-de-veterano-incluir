const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());

// Configuração do CORS
const corsOptions = {
    origin: 'https://buscador-de-veterano-incluir-front.vercel.app',
    methods: 'GET,POST',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


app.use(routes);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
