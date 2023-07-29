import { ApiError } from "../../helpers";
import { omitUndefined } from "../../helpers/objectUtils";
import { TodoModel } from "../../models"
import { CreateTodoType, DeleteTodoType, GetTodoProps, UpdateTodoType } from "./dto"

export const getTodo = async (props: GetTodoProps) => {
    const { user_id, id } = props;
    const todos = await TodoModel.find(omitUndefined({ user: user_id, _id: id }))
    if (id) {
        if (todos[0]) {
            return todos[0]
        } else {
            throw new ApiError(404, "Todo not found related to provided id!")
        }
    } else {
        return todos
    }
}

export const createTodo = async (props: CreateTodoType) => {
    const { user_id, title, description } = props;
    const todo = new TodoModel({
        title,
        description,
        user: user_id
    })
    const createdTodo = await todo.save()
    return createdTodo
}

export const updateTodo = async (props: UpdateTodoType) => {
    const { _id, ...restProps } = props;
    const todo = await TodoModel.findById(_id)
    if (!todo) {
        throw new ApiError(404, "Todo not found related to provided id!")
    }
    await todo.updateOne(restProps)
    return { success: true }
}

export const deleteTodo = async (props: DeleteTodoType) => {
    const { _id } = props;
    const todo = await TodoModel.findById(_id)
    if (!todo) {
        throw new ApiError(404, "Todo not found related to provided id!")
    }
    todo.deleteOne()
    return { success: true }
}
