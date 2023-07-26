import express from 'express'
import getTodos from './get-todos';
import createTodo from './create-todos';

const todoRoutes = express()
    .get("/", getTodos)
    .post("/", createTodo)

export default todoRoutes