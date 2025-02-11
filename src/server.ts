import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

// HTTP Method: GET, POST, PUT, PATCH, DELETE
/*
  GET - Read, Listar
  POST - Create, Criar
  PUT - Update, Atualizar
  PATCH - Update, Atualizar
  DELETE - Delete, Deletar

*/

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  
  return users
})

// API RESTfull

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP server running on http://localhost:3333')
})