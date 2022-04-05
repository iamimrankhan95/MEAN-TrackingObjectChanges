import { IUser } from "../Models/User.model";
import UserRepo from "../Repo/user.repo";

class UserListHandler {
    static isSignIn: boolean;
    static userListHandler: UserListHandler;
    userRepo:UserRepo=UserRepo.getRepoInstance()
    constructor() {
    }

    public static getHandlerInstance() {
        if (!this.userListHandler) {
            this.userListHandler = new UserListHandler();
        }
        return this.userListHandler;
    }

    public async readUser(): Promise<IUser[]> {
        let users: IUser[] = await this.userRepo.readUser();
        return users;
    }

    // public async createUser(users:IUser[]): Promise<IUser[]> {
    //     let newUsers: IUser[] = await this.userRepo.createUser(users);
    //     return newUsers;
    // }

    // public async update(user:IUser): Promise<IUser[]> {
    //     let result = await UserModel.updateOne({name:user.name},{status: user.status});
    //     let newUser = result.acknowledged === true ? UserModel.findOne({ name: oldUser.name }) : null;
    //     let newUsers: IUser[] = await UserRepo.getRepoInstance().createUsers(users);
    //     return newUsers;
    // }

    // public async deleteUser(): Promise<IUser[]> {
    //     let users: IUser[] = await this.userRepo.deleteUser();
    //     return users;
    // }

    disconnect() {

    }
}

export default UserListHandler;