const express = require('express')

const routes = express.Router()
const users=[
    {
        id: 1,
        name: 'Pedro',
        email: 'srfulano@lalala.com',
        CPF: '123456'
    }
]

routes.post('/verificador',(req,res)=>{
    const {name,CPF} = req.body

    const user = users.find(user =>user.name === name && user.CPF === CPF)
    if(user){
        return res.status(200).json(user)
    }
    return res.status(401).json({message:'Deu ruim bb'})
})
module.exports = routes