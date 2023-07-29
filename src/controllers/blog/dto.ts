import { Types } from "mongoose"

export type CreateBlogType = {
    user_id: Types.ObjectId,
    title?: string,
    description?: string,
    image?: string
}

export type UpdateBlogType = {
    _id: string,
    title?: string,
    description?: string,
    image?: string
}

export type DeleteBlogType = {
    _id: string
}

export type GetBlogType = {
    id?: string,
    user_id?: Types.ObjectId
}