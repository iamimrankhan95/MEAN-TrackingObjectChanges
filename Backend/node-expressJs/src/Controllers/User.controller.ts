import UserModel from '../Models/User.model';
import User, { IUser } from '../Models/User.model';

async function CreateUser(user: IUser): Promise<IUser> {
    return User.create(user)
        .then((data: IUser) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

async function createUsers(users: IUser[]): Promise<IUser[]> {
    let result = await User.insertMany(users);
    return result;
}

async function readUsers(): Promise<IUser[]> {
    let result = await UserModel.find({});
    // console.log(result);
    return result;
}

async function updateUser(updatedUserInfo: IUser): Promise<IUser | null> {
    let result = await User.updateOne({name:updatedUserInfo.name},{status: updatedUserInfo.status});
    let newUser = result.acknowledged === true ? User.findOne({ name: updatedUserInfo.name }) : null;
    return newUser;
}

async function deleteUsers(): Promise<IUser[]> {
    await User.deleteMany({});
    let result = readUsers();
    // console.log(result);
    return result;
}

export default {
    createUsers,
    readUsers, deleteUsers, updateUser
};