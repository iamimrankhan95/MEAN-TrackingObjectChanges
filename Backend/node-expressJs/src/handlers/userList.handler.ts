import UserModel, { IUser } from "../Models/User.model";
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
            return this.userListHandler;
        }
        return this.userListHandler;
    }

    public async readUser(): Promise<IUser[]> {
        let users: IUser[] = await this.userRepo.readUsers();
        return users;
    }

    public async createUser(users:IUser[]): Promise<IUser[]> {
        let newUsers: IUser[] = await this.userRepo.createUsers(users);
        return newUsers;
    }

    public async deleteUser(): Promise<IUser[]> {
        let users: IUser[] = await this.userRepo.deleteUser();
        return users;
    }

    disconnect() {

    }
}

export default UserListHandler;