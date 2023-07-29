import { Types } from "mongoose";

export interface IUser {
    _id: Types.ObjectId;
    firebaseUid: string;
    email: string;
    emailVerified: boolean;
    displayName: string;
    photoUrl: string | null;
}       