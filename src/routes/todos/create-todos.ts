import Joi from 'joi';
import { Request, Response } from '../../helpers';
import { wrap } from '../../wrappers';
import { createTodo } from '../../controllers';

const createTodoSchemas = {
    reqQuery: Joi.object().length(0),
    reqBody: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().optional(),
    }),
};

type CerateTodosBody = {
    title: string;
    description?: string;
}

async function createTodoApi(req: Request<CerateTodosBody>, res: Response) {
    const { title, description } = req.body
    const { auth_id } = res.locals.user || {}
    const todo = await createTodo({ title, description, auth_id: auth_id! })
    res.send(todo)
}

export default wrap(createTodoApi, {
    catch: true,
    authedOnly: true,
    validate: createTodoSchemas
})