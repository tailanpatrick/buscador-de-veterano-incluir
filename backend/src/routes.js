const express = require("express");
const { prisma } = require("./prisma.js"); 
const routes = express.Router();

routes.post("/verificador", async (req, res) => {
  const { name, cpf } = req.body;

  if (!name.trim() && !cpf.trim()) {
    return res.status(400).json({ message: "Ambos os campos estão em branco" });
  }

  try {
    
    const users = await prisma.$queryRaw`SELECT * FROM "AlunosMatriculados" 
      WHERE cpf ilike ${cpf} || '%' AND unaccent("nomeCompleto") 
      ilike '%' || unaccent(${name}) || '%'`;
    
    const userData = users.map((user) => ({
      CPF: user.cpf,
      email: user.email,
      name: user.nomeCompleto,
    }));

    if (userData.length > 0) {
      return res.status(200).json(userData);
    }

    return res.status(200).json({ message: "Nenhum aluno encontrado!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
});

module.exports = routes;
