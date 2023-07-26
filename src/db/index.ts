import mongoose from "mongoose";
import { MONGODB_URL } from "../config";

mongoose.connect(MONGODB_URL!).then(() => {
    console.log("🚀 ~ DB connected!")
}).catch((error) => {
    console.log("🚀 ~ file: index.ts:7 ~ mongoose.connect ~ error:", error)
})