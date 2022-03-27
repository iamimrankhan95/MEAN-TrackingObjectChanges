import mongoose, { Schema, Document } from "mongoose"
export interface IStatus  {
    name: string;
    color: string;
}

const UserSchema: Schema = new Schema({
    name: {
        type: String,
    },
    color: {
        type: String,
    }
})

export default mongoose.model<IStatus>("Status", UserSchema)