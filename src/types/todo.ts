import { Types } from "mongoose";

export interface ITodo {
    _id: string;
    user: Types.ObjectId;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
}   