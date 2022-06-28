// Створити express роутер і додати окремі роути по завданні
const express = require('express')
const router = express.Router()
const {allTodos,createNewTodo,findTodos,removeTodos,changeTodos} = require('../controllers/tasksController')
const schemaValidate = require('../validationSchemas/todos')
const todosSchemas = require('../middlewares/schemaValidate')
router.get('/', allTodos)
router.post('/', schemaValidate(todosSchemas.verifyData),createNewTodo)
router.get('/:todosId',findTodos)
router.delete('/:todosId',schemaValidate(todosSchemas.verifyData),removeTodos)
router.put('/:todosId',changeTodos)
router.patch('/:todoId/completed', schemaValidate(todosSchemas.verifyCompleted), changeTodoCompleted);
module.exports = router
module.exports = router