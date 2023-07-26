import Joi from 'joi';
import { EmptyObject, Request, Response } from '../../helpers';
import { wrap } from '../../wrappers';
import { getTodos } from '../../controllers';

const getTodosSchemas = {
    reqQuery: Joi.object({
        id: Joi.string().optional()
    }),
    reqBody: Joi.object().length(0),
};

type GetTodosQury = {
    id?: string
}

async function getTodosApi(req: Request<EmptyObject, GetTodosQury>, res: Response) {
    const { id } = req.query
    const { auth_id } = res.locals.user || {}
    const todos = await getTodos({ auth_id, id })
    res.send(todos)
}

export default wrap(getTodosApi, {
    catch: true,
    authedOnly: true,
    validate: getTodosSchemas
})