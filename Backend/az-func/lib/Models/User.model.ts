import { Schema, model } from "mongoose"
import StatusSchema, { IStatus } from "./Status.model";
 
export interface IUser {
    name: string;
    status: IStatus;
}

const UserSchema: Schema = new Schema({
    name: {
        type: String
    },
    status: {
        _id: false,
        name: String,
        color: String
    }
})

// export default mongoose.model<IUser>("User", UserSchema)


// const CategoryModel = model("Category", CategorySchema, "Bookstore");
export const UserModel = model("User", UserSchema);