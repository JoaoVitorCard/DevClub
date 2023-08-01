const express = require('express')
const uuid = require('uuid')
const app = express()
const localhost = 3000
app.use(express.json())
/* 
  - Query params => meusite.com/users?nome=João Vitor&age=22
  - Route params => /users/2
  - Request body => {"name":"João Vitor", "age":22}

  - GET           => Buscar informação no back-end.
  - POST          => Criar informação no back-end.
  - PUT / PATCH   => Alterar/Atualizar informação no back-end.
  - DELETE        => Deletar informação no back-end.

  Middleware => INTERCEPTADOR => tem o poder de parar ou alterar dados da requisição. 
*/

const users = []

const checkUserId = (request, response, next) => {
  const { id } = request.params
  const index = users.findIndex(user => user.id === id)

  if (index < 0) {
    return response.status(404).json({ error: "User not found" })
  }

  request.userIndex = index
  request.userId = id

  next()
}

app.get('/users', (request, response) => {
  return response.json(users)
})

app.post('/users', (request, response) => {
  try {
    const { name, age } = request.body

    if (age < 18) throw new Error('Only allowed users over 18 years old')

    const user = { id: uuid.v4(), name, age }
    users.push(user)

    return response.status(201).json(user)
  } catch (err) {
    return response.status(500).json({ error: err.message })
  } finally /*OPICIONAL*/ {
    console.log('Tudo finalizado')
  }
})

app.put('/users/:id', checkUserId, (request, response) => {
  const { name, age } = request.body
  const index = request.userIndex
  const id = request.userId
  const updatedUser = { id, name, age }

  users[index] = updatedUser
  return response.json(updatedUser)
})

app.delete('/users/:id', checkUserId, (request, response) => {
  const index = request.userIndex
  users.splice(index, 1)

  return response.status(204).json(users)
})

app.listen(localhost, () => console.log(`🚀 Server started on port ${localhost}`))