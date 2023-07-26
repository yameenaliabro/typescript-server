import { Types } from "mongoose";
import { IUser } from "./user";

export interface ITodo {
    _id: string;
    auth_id: Types.ObjectId | IUser["auth_id"];
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
}