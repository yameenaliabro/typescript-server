import { Types } from "mongoose";

export interface Iblog {
    _id: string,
    user: Types.ObjectId
    title: string,
    description: string,
    image: string
    createdAt: string;
    updatedAt: string;
}