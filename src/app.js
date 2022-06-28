// Імпортувати express
const express = require('express')
const volleyball = require('volleyball')
// Імпортувати роутер завдань
const todosRouter = require('./routes/todos')
// Створити express програму
const app = express()
// Налаштувати парсинг json для express
app.use(express.json)
app.use(volleyball)
// Підключити по правильному базовому url роутер завдань
app.use('/api/todos',todosRouter)
// Експортувати express програму
module.exports = app