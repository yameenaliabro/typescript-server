import { getBlog } from "../../controllers/blog";
import { EmptyObject, Request, Response } from "../../helpers";

type GetBlogsQuery = {
    id?: string
}
const GetBlogApi = async (req: Request<EmptyObject, GetBlogsQuery>, res: Response) => {
    const { id } = req.query
    const { _id: user_id } = res.locals.user || {}
    const blog = await getBlog(id)
}