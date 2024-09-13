const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv').config();

const app = express();

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
