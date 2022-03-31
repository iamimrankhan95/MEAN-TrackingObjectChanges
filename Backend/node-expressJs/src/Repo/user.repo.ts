import UserModel, { IUser } from "../Models/User.model";

class UserRepo {
    static userRepo: UserRepo;
    connString: string = "";

    private constructor() {
    }

    public static getRepoInstance() {
        if (!this.userRepo) {
            this.userRepo = new UserRepo();
            return this.userRepo;
        }
        return this.userRepo;
    }

    public async readUsers(): Promise<IUser[]> {
        let result = await UserModel.find({});
        return result;
    }

    public async updateUserStatus(updatedUserInfo: IUser,status:any): Promise<IUser | null> {
        let result = await UserModel.updateOne({ name: updatedUserInfo.name }, { status: status });
        let newUser = result.acknowledged === true ? await UserModel.findOne({ name: updatedUserInfo.name }) : null;
        return newUser;
    }
}

export default UserRepo;