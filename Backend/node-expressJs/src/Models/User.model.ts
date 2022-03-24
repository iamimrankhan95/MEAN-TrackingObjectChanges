import mongoose, { Schema, Document } from "mongoose"
import { IStatus } from "./Status.model";

export interface IUser {
    name: string;
    status: IStatus;
}

const UserSchema: Schema = new Schema({
    name: {
        type: String
    },
    status: {
        type: String,
    }
})

export default mongoose.model<IUser>("User", UserSchema)