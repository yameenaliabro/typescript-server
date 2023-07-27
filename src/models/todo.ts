import mongoose, { Schema } from "mongoose";
import { ITodo } from "../types";

const TodoSchema = new Schema<ITodo>({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { requiredL: true, type: String },
    description: { type: String },
    completed: { default: false, type: Boolean }
}, { timestamps: true });

const TodoModel = mongoose.model("Todo", TodoSchema)

export default TodoModel