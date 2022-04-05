import HttpReqHandler from "../handlers/http-req.handler";
import UserStatusListener from "../listeners/userStatus.listener";
import UserModel, { IUser } from "../Models/User.model";

class UserRepo {
    static userRepo: UserRepo;
    connString: string = "";
    userStatusListener: UserStatusListener = UserStatusListener.getHandlerInstance();
    httpReqHandler: HttpReqHandler = HttpReqHandler.getHandlerInstance();
    private constructor() {
    }

    public static getRepoInstance() {
        if (!this.userRepo) {
            this.userRepo = new UserRepo();
        }
        return this.userRepo;
    }

    public async readUsers(): Promise<IUser[]> {
        // let result = await UserModel.find({});
        let users: IUser[] = [];
        let httpResult = await this.httpReqHandler.readFromAzFuncUser();

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
        let httpResult = await this.httpReqHandler.updateAzFuncUser({ name: name, status: status });
        let newUser = httpResult;

        if (newUser !== null) {
            this.userStatusListener.notify(JSON.stringify(newUser), false);
        }
        return newUser;
    }


}

export default UserRepo;