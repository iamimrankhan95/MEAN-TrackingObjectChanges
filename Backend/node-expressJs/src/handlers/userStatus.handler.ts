import UserModel, { IUser } from "../Models/User.model";
import UserRepo from "../Repo/user.repo";

class UserStatusHandler {
    static userStatusHandler: UserStatusHandler;
    userRepo : UserRepo = UserRepo.getRepoInstance();
    connString: string = "";

    private constructor() {
    }

    public static getHandlerInstance() {
        if (!this.userStatusHandler) {
            this.userStatusHandler = new UserStatusHandler();
        }
        return this.userStatusHandler;
    }

    public async updateUserStatus(name:string,Status:any): Promise<IUser|null> {
        let result = await this.userRepo.updateUserStatus(name,Status);
        return result;
    }
}

export default UserStatusHandler;