const {
    getAllTodos,
    createTodo,
    getTodoById,
    updateTodo,
    updateTodoCompleted
  } = require("../db/todos");
  
  const allTodos = async (req, res)=>{
    try {
        const todos = await getAllTodos();
        res.json(todos);
      } catch (error) {
        res.status(404).json({ message: "Not found" });
      }
  }
  const findTodos = async (req, res)=>{
    const {id} = req.params;
    const todosFind = await getTodoById(id);
 
    try {
          if (!todosFind) {
      return res
        .status(404)
        .json({ message: `Not found id ${id}` });
    }
        res.json(todosFind);
      } catch (error) {
        res.status(404).json({ message: "Not found" });

      }
  }
  
  const createNewTodo = async (req, res)=>{
    try {
        const {text}= req.body
         const newTodoCreate = await createTodo(text)
        res.status(201).json(newTodoCreate);
      } catch (error) {
        res.status(404).json({ message: "Not found" });
        console.log(error)
      }
  }

  const removeTodos = async (req, res)=>{
    const { id } = req.params;
      const deleted = await getTodoById(id);
      if (!deleted) {

        res.status(404).json({
        
        message:`Todo with id ${id} not found`
        
        })}
        try {
            const deletedTodo = await removeTodos(id);
            res.json({
              message: "todo deleted",
              deletedTodo,
            });
            res.status(201).json(deleted);
          } catch (error) {
            res.status(404).json({ message: "Not found" });
          }
    
  }
  const changeTodos = async (req, res) => {
    const { todostId } = req.params;
    const todo = await getTodoById(todostId);
    if (!todo) {
      return res
        .status(404)
        .json({ message: `Todo with id ${todostId} not found` });
    }
    if (!req.body) {
      return res.status(400).json({ message: "missing required name field" });
    }
    try {
      const updatedTodo = await updateTodo(todostId, req.body);
      res.json(updatedTodo);
    } catch (error) {
      res.status(404).json({ message: "Something went wrong, Not found" });
    }
  };
  const changeTodoCompleted = async (req, res) => {
    const { todoId } = req.params;
    const { completed } = req.body;
    try {
      const todo = await getTodoById(todoId);
      if (!todo) {
        return res
          .status(404)
          .json({ message: `Contact with id ${todoId} not found` });
      }
      const updatedTodo = await updateTodoCompleted(todoId, completed);
      res.json(updatedTodo);
    } catch (error) {
      res.status(500).json({
        message: `Something went wrong, ${error}`,
      });
    }
  };
module.exports = {
    allTodos,
    createNewTodo,
    findTodos,
    removeTodos,
    changeTodos,
    changeTodoCompleted
  }