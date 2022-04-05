import { Schema, model } from "mongoose"
export interface IStatus {
    name: string;
    color: string;
}

export const StatusSchema: Schema = new Schema({
    name: {
        type: String,
    },
    color: {
        type: String,
    }
}, { _id: false });

export default model<IStatus>("Status", StatusSchema)