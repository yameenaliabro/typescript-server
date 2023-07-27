import express from 'express';
import cors from 'cors';
import { PORT } from './config';
import './db'
import routes from './routes';
import apiErrorHandler from './middlewares/apiErrorHandler';

const app = express()
    .use(express.json())
    .use(cors())
    .use(routes)
    .use(apiErrorHandler)


app.listen(PORT, () => {
    console.log("🚀 ~ Server is running on port", PORT)
})