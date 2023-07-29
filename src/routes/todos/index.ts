import express from 'express'
import getTodos from './get-todos';
import createTodo from './create-todo';
import deleteTodo from './delete-todo';
import updateTodo from './update-todo';

const todoRoutes = express()
    .get("/", getTodos)
    .post("/", createTodo)
    .delete("/", deleteTodo)
    .patch("/", updateTodo)

export default todoRoutes