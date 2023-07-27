import Joi from 'joi';
import { EmptyObject, Request, Response } from '../../helpers';
import { wrap } from '../../wrappers';
import { deleteTodo } from '../../controllers';

const deleteTodoSchemas = {
    reqQuery: Joi.object({
        id: Joi.string().required()
    }),
    reqBody: Joi.object().length(0),
};

type DeleteTodosQuery = {
    id: string;
}

async function deleteTodoApi(req: Request<EmptyObject, DeleteTodosQuery>, res: Response) {
    const { id } = req.query
    const todo = await deleteTodo({ _id: id })
    res.send(todo)
}

export default wrap(deleteTodoApi, {
    catch: true,
    authedOnly: true,
    validate: deleteTodoSchemas
})