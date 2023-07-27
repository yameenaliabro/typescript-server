import Joi from 'joi';
import { EmptyObject, Request, Response } from '../../helpers';
import { wrap } from '../../wrappers';
import { updateTodo } from '../../controllers';

const updateTodoSchemas = {
    reqQuery: Joi.object({
        id: Joi.string().required()
    }),
    reqBody: Joi.object({
        title: Joi.string().optional(),
        description: Joi.string().optional(),
        completed: Joi.boolean().optional(),
    }),
};

type updateTodoQuery = {
    id: string;
}

type updateTodoBody = {
    title?: string;
    description?: string;
    completed?: boolean;
}

async function updateTodoApi(req: Request<updateTodoBody, updateTodoQuery>, res: Response) {
    const { id } = req.query
    const todo = await updateTodo({ _id: id, ...req.body })
    res.send(todo)
}

export default wrap(updateTodoApi, {
    catch: true,
    authedOnly: true,
    validate: updateTodoSchemas
})