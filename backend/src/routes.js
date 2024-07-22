const express = require('express');
const { prisma } = require('./prisma.js');
const routes = express.Router();
const users=[
    {
        id: 1,
        name: 'Pedro',
        email: 'srfulano@lalala.com',
        CPF: '123456'
    }
]

routes.post('/verificador',async (req,res)=>{
    const {name,CPF} = req.body;
    if(name.trim()=='' && CPF.trim()==''){
        return res.status(400).json({message:'Ambos os campos estão em branco'})
    }
    const users = await prisma.alunosMatriculados.findMany(
        {where:
            {AND:[
                {cpf:{contains:CPF}},
                {nomeCompleto:
                    {startsWith:name, mode:'insensitive'}}]}});
    const userData = users.map(user =>({CPF:user.cpf,email:user.email,name:user.nomeCompleto}));
    if(userData.length > 0){
        return res.status(200).json(userData);
    }
    return res.status(401).json({message:'Deu ruim bb'});
})
module.exports = routes;