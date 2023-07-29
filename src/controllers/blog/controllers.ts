import { ApiError } from "../../helpers"
import { omitUndefined } from "../../helpers/objectUtils"
import { BlogModel } from "../../models"
import { CreateBlogType, DeleteBlogType, GetBlogType, UpdateBlogType } from "./dto"

export const createBlog = async (props: CreateBlogType) => {
    const { description, title, image, user_id } = props
    const blog = new BlogModel({
        title,
        description,
        image,
        user: user_id,
    })
    const createblog = await blog.save()
    return createblog
}

export const getBlog = async (props: GetBlogType) => {
    const { user_id, id } = props
    const blog = await BlogModel.find(omitUndefined({ user: user_id, id: id }))
    if (id) {
        if (blog[0]) {
            return blog[0]
        }
        else {
            throw new ApiError(404, "Blog not found related to provided id!")
        }
    } else {
        return blog
    }
}

export const deleteBlog = async (props: DeleteBlogType) => {
    const { _id } = props
    const blog = await BlogModel.findById(_id)
    if (!blog) {
        throw new ApiError(404, "blog is not deleted")
    }
    blog.deleteOne()
    return { sucess: true }
}

export const updateBlog = async (props: UpdateBlogType) => {
    const { _id, ...rsestprops } = props
    const blog = await BlogModel.findById(_id)
    if (!blog) {
        throw new ApiError(404, "this blog is not found! ")
    }
    blog.updateOne()
    return { sucess: true }
}
