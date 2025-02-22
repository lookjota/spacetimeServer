import 'dotenv/config'

import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'

import  multipart  from '@fastify/multipart'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'node:path'
// import cors from 'fastify-cors'


const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

// app.register(cors, {
//   origin: true,
// })

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app.listen({
  port: 3333,
  host: '0.0.0.0',
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
