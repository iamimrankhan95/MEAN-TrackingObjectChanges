import AzureFuncClient from "../handlers/azure-func-client";
import UserStatusListener from "../listeners/userStatus.listener";
import UserModel, { IUser } from "../Models/User.model";

class UserRepo {
    static userRepo: UserRepo;
    connString: string = "";
    userStatusListener: UserStatusListener = UserStatusListener.getHandlerInstance();
    AzureFuncClient: AzureFuncClient = AzureFuncClient.getHandlerInstance();
    private constructor() {
    }

    public static getRepoInstance() {
        if (!this.userRepo) {
            this.userRepo = new UserRepo();
        }
        return this.userRepo;
    }

    public async readUsers(): Promise<IUser[]> {
        let users: IUser[] = [];
        let httpResult = await this.AzureFuncClient.readFromAzFuncUser();

        if (httpResult !== null) {
            users = httpResult;
        }
        return users;
    }

    async createUsers(users: IUser[]): Promise<IUser[]> {
        let result = await UserModel.insertMany(users);
        return result;
    }

    async deleteUser(): Promise<IUser[]> {
        await UserModel.deleteMany({});
        let result = await this.readUsers();
        return result;
    }

    async updateUserStatus(name: string, status: any): Promise<IUser | null> {
        let httpResult = await this.AzureFuncClient.updateAzFuncUser({ name: name, status: status });
        let newUser = httpResult;

        if (newUser !== null) {
            this.userStatusListener.notify(JSON.stringify(newUser), false);
        }
        return newUser;
    }
}

export default UserRepo;