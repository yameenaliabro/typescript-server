import express from 'express';
import cors from 'cors';
import { PORT } from './config';
import './db'
import routes from './routes';
import apiErrorHandler from './middlewares/apiErrorHandler';

const app = express()
    .use(express.json())
    .use(cors())
    .use(apiErrorHandler)
    .use(routes);


app.listen(PORT, () => {
    console.log("🚀 ~ Server is running on port", PORT)
})