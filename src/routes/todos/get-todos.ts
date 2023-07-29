import Joi from 'joi';
import { EmptyObject, Request, Response } from '../../helpers';
import { wrap } from '../../wrappers';
import { getTodo } from '../../controllers';

const getTodosSchemas = {
    reqQuery: Joi.object({
        id: Joi.string().optional()
    }),
    reqBody: Joi.object().length(0),
};

type GetTodosQuery = {
    id?: string
}

async function getTodosApi(req: Request<EmptyObject, GetTodosQuery>, res: Response) {
    const { id } = req.query
    const { _id: user_id } = res.locals.user || {}
    const todos = await getTodo({ user_id, id })
    res.send(todos)
}

export default wrap(getTodosApi, {
    catch: true,
    authedOnly: true,
    validate: getTodosSchemas
})