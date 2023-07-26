import { omitUndefined } from "../../helpers/objectUtils";
import { TodoModel } from "../../models"
import { CreateTodoType, GetTodoProps } from "./dto"

export const getTodos = async (props: GetTodoProps) => {
    const { auth_id, id } = props;
    const todos = await TodoModel.find(omitUndefined({ auth_id, _id: id }))
    return todos
}

export const createTodo = async (props: CreateTodoType) => {
    const { auth_id, title, description } = props;
    const todo = new TodoModel({
        title,
        description,
        auth_id
    })
    const createdTodo = await todo.save()
    return createdTodo
}