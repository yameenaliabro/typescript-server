import Joi from "joi";
import { createBlog } from "../../controllers/blog";
import { Request, Response } from "../../helpers"
import { validate, wrap } from "../../wrappers";

type CreateBlogBody = {
    title?: string,
    description?: string,
    image?: string
}

const createBlogScehmas = {
    reqQuery: Joi.object().length(0),
    reqBody: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required()
    }),


}
const createBlogApi = async (req: Request<CreateBlogBody>, res: Response) => {
    const { title, description, image } = req.body;
    const { _id: user_id } = res.locals.user || {}
    const createblog = createBlog({ title, description, image, user_id: user_id! })
    res.send(createblog)

}
export default wrap(createBlog, {
    catch: true,
    validate: createBlogScehmas,
    authedOnly: true
})
