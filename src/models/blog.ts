import mongoose, { Schema } from "mongoose";
import { Iblog } from "../types";

const BlogSchema = new Schema<Iblog>({
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },

}, { timestamps: true })

const BlogModel = mongoose.model("Blog", BlogSchema)
export default BlogModel