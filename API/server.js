import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const app = express()
app.use(express.json())
app.use(cors())


// ==> Cadastra um usuário
app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})



// ==> Lista os meus usuários
app.get('/usuarios', async (req, res) => {
        let users = []

    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                id: req.query.id,
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })

    } else {
        users = await prisma.user.findMany()
    }

    return res.status(200).json(users)

})



// ==> Edita um usuário pelo ID no Banco de Dados
app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({

        where: {
            id: req.params.id
        },

        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})




// ==> Deleta um usuário pelo ID no Banco de Dados
app.delete('/usuarios/:id', async (req, res) => {

    await prisma.user.delete({

        where: {
            id: req.params.id

        }
    })
        
    res.status(200).json({ mensagem: 'Usuário foi deletado com sucesso!'})
})
  
  app.listen(3000)












    /// l87uoynyl7dCaxvN
  /// GET => Listar
  /// POST => Criar
  /// PUT => Editar vários
  /// PATCH => Editar Um 
  /// DELETE => Deletar 