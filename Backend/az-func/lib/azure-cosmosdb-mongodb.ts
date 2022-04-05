// import { Schema, model, connect } from "mongoose";

// let db = null;

// // const CategorySchema = new Schema(
// //     { categoryName: String },
// //     { timestamps: true }
// // );

// // const UserSchema = new Schema({
// //     name: {
// //         type: String
// //     },
// //     status: {
// //         _id: false,
// //         name: String,
// //         color: String
// //     }
// // })

// // // const CategoryModel = model("Category", CategorySchema, "Bookstore");
// // const UserModel = model("User", UserSchema);

// export const init = async () => {
//     if (!db) {
//         db = await connect(process.env["CosmosDbConnectionString"]);
//     }
// };

// // export const addItem = async (doc) => {
// //     const modelToInsert = new CategoryModel();
// //     modelToInsert["categoryName"] = doc.name;

// //     return await modelToInsert.save();
// // };
// export const addUser = async (doc) => {
//     console.log('doc:--> ', doc);
//     const modelToInsert = new UserModel();
//     modelToInsert["name"] = doc.name;
//     modelToInsert["status"] = doc.status;

//     return await modelToInsert.save();
// };

// // export const findItemById = async (id) => {
// //     return await CategoryModel.findById(id);
// // };
// export const findUserById = async (id) => {
//     return await UserModel.findById(id);
// };

// export const findUserByName = async (name) => {
//     return await UserModel.findOne({ name: name });
// };

// // export const findItems = async (query = {}) => {
// //     return await CategoryModel.find({});
// // };
// export const findUsers = async (query = {}) => {
//     return await UserModel.find({});
// };

// // export const deleteItemById = async (id) => {
// //     return await CategoryModel.findByIdAndDelete(id);
// // };
// export const updateUserByName = async (user) => {
//     let result = await UserModel.updateOne({ name: user.name }, { status: user.status });
//     let updatedUser = null;
//     if (result.acknowledged === true) {
//         updatedUser = await findUserByName(user.name);
//     }
//     return updatedUser;
// };