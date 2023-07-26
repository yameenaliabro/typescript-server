import mongoose, { Schema } from "mongoose";
import { IUser } from "../types";

const UserSchema = new Schema<IUser>({
    auth_id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    emailVerified: { type: Boolean, default: false },
    displayName: { type: String, required: true },
    photoUrl: { type: String, default: null }
}, { timestamps: true })

const UserModel = mongoose.model("User", UserSchema)

export default UserModel