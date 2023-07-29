import Joi from "joi";
import { deleteBlog } from "../../controllers/blog";
import { Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";

type DeleteBlogQuery = {
    id: string
}

const DeleteBlogSchemas = {
    reqQuery: Joi.object({
        id: Joi.string().required()
    }),
    reqBody: Joi.object().length(0)

}

const deleteBlogApi = async (req: Request<DeleteBlogQuery>, res: Response) => {
    const { id } = req.query
    const blog = await deleteBlog(id)
    res.send(blog)
}

export default wrap(deleteBlogApi, {
    catch: true,
    validate: DeleteBlogSchemas,
    authedOnly: true
})

