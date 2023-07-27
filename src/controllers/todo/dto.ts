import { Types } from "mongoose";

export type GetTodoProps = {
    user_id?: Types.ObjectId;
    id?: string;
}

export type CreateTodoType = {
    user_id?: Types.ObjectId;
    title: string;
    description?: string;
}

export type UpdateTodoType = {
    _id: string
    title?: string;
    description?: string;
    completed?: boolean;
}

export type DeleteTodoType = {
    _id: string
}