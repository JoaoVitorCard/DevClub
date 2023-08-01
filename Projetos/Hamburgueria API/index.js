const express = require('express')
const uuid = require('uuid')
const app = express()
const localhost = 3000
app.use(express.json())

const orders = []

const checkOrderId = (request, response, next) => {
  const { id } = request.params
  const index = orders.findIndex(orders => orders.id === id)

  if (index < 0) {
    return response.status(401).json({ error: "Order not found" })
  }

  request.orderIndex = index
  request.orderId = id

  next()
}

const typeOfRequest = (request, response, next) => {
  console.log('Request Type: ', request.method)
  console.log('Request URL: ', request.originalUrl)
  next()
}

app.post('/order', typeOfRequest, (request, response) => {
  const { order, clientName, price, status } = request.body
  const clientOrder = { id: uuid.v4(), order, clientName, price, status: "Em preparação" }
  orders.push(clientOrder)
  return response.status(201).json(clientOrder)
})

app.get('/order', typeOfRequest, (request, response) => {
  return response.json(orders)
})

app.put('/order/:id', checkOrderId, typeOfRequest, (request, response) => {
  const { order, clientName, price, status } = request.body
  const index = request.orderIndex
  const id = request.orderId
  const updateOrder = { id, order, clientName, price, status: "Em preparação" }
  orders[index] = updateOrder

  return response.json(updateOrder)
})

app.delete('/order/:id', checkOrderId, typeOfRequest, (request, response) => {
  const index = request.orderIndex
  orders.splice(index, 1)

  return response.status(204).json(orders)
})

app.get('/order/:id', checkOrderId, typeOfRequest, (request, response) => {
  const index = request.orderIndex
  return response.json(orders[index])
})

app.patch('/order/:id', checkOrderId, typeOfRequest, (request, response) => {
  const index = request.orderIndex
  orders[index].status = "Pronto"
  return response.json(orders[index])
})

app.listen(localhost, () => console.log(`🍔 Server started on port ${localhost}`))