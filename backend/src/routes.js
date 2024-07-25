const express = require('express');
const { prisma } = require('./prisma.js'); // Verifique se o caminho está correto
const routes = express.Router();

routes.post('/verificador', async (req, res) => {
    const { name, cpf } = req.body;

    if (name.trim() === '' && cpf.trim() === '') {
        return res.status(400).json({ message: 'Ambos os campos estão em branco' });
    }

    try {
        const users = await prisma.alunosMatriculados.findMany({
            where: {
                AND: [
                    { cpf: { startsWith: cpf } },
                    { nomeCompleto: { startsWith: name, mode: 'insensitive' } }
                ]
            }
        });

        const userData = users.map(user => ({
            CPF: user.cpf,
            email: user.email,
            name: user.nomeCompleto
        }));

        if (userData.length > 0) {
            return res.status(200).json(userData);
        }
        return res.status(200).json({ message: 'Nenhum aluno encontrado!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

module.exports = routes;
