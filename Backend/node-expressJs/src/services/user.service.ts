import UserListHandler from '../handlers/userList.handler';
import UserStatusHandler from '../handlers/userStatus.handler';
import UserModel from '../Models/User.model';
import User, { IUser } from '../Models/User.model';
import UserRepo from '../Repo/user.repo';


class UserService {
    static userService: UserService;
    connString: string = "";

    private constructor() {
    }

    public static getServiceInstance() {
        if (!this.userService) {
            this.userService = new UserService();
            return this.userService;
        }
        return this.userService;
    }

    public async readUser(): Promise<IUser[]> {
        let result = await UserListHandler.getHandlerInstance().readUser();
        return result;
    }
    public async createUser(users:IUser[]): Promise<IUser[]> {
        let result = await UserListHandler.getHandlerInstance().createUser(users);
        return result;
    }
    public async deleteUser(): Promise<IUser[]> {
        let result = await UserListHandler.getHandlerInstance().deleteUser();
        return result;
    }

    public async updateUserStatus(name: string, Status: any): Promise<IUser | null> {
        let result = await UserStatusHandler.getHandlerInstance().updateUserStatus(name, Status);
        return result;
    }

    // public async updateUser(user:IUser): Promise<IUser | null> {
    //     let result = await UserListHandler.getHandlerInstance().updateUser(user);
    //     return result;
    // }
}

export default UserService;

// module UserService {
//     export async function CreateUser(user: IUser): Promise<IUser> {
//         return User.create(user)
//             .then((data: IUser) => {
//                 return data;
//             })
//             .catch((error: Error) => {
//                 throw error;
//             });
//     }

//     export async function createUsers(users: IUser[]): Promise<IUser[]> {
//         let result = await User.insertMany(users);
//         return result;
//     }

//     export async function readUsers(): Promise<IUser[]> {
//         let result = await UserModel.find({});
//         // console.log(result);
//         return result;
//     }

//     export async function updateUser(updatedUserInfo: IUser): Promise<IUser | null> {
//         let result = await User.updateOne({ name: updatedUserInfo.name }, { status: updatedUserInfo.status });
//         let newUser = result.acknowledged === true ? User.findOne({ name: updatedUserInfo.name }) : null;
//         return newUser;
//     }

//     export async function deleteUsers(): Promise<IUser[]> {
//         await User.deleteMany({});
//         let result = readUsers();
//         // console.log(result);
//         return result;
//     }
// };

// export default UserService;