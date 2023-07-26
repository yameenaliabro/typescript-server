import express from 'express'
import todoRoutes from './todos'

const routes = express()
    .use("/todos", todoRoutes)

export default routes