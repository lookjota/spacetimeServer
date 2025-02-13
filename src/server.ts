import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(memoriesRoutes)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP server running on http://localhost:3333')
})


// HTTP Method: GET, POST, PUT, PATCH, DELETE
/*
  GET - Read, Listar
  POST - Create, Criar
  PUT - Update, Atualizar
  PATCH - Update, Atualizar
  DELETE - Delete, Deletar
*/
// API RESTfull
