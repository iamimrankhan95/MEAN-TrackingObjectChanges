import UserStatusListener from "../listeners/userStatus.listener";
import UserModel, { IUser } from "../Models/User.model";

class UserRepo {
    static userRepo: UserRepo;
    connString: string = "";
    userStatusListener: UserStatusListener = UserStatusListener.getHandlerInstance();
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

    async createUsers(users: IUser[]): Promise<IUser[]> {
        let result = await UserModel.insertMany(users);
        return result;
    }
    async deleteUser(): Promise<IUser[]> {
        await UserModel.deleteMany({});
        let result = await this.readUsers();
        return result;
    }

    public async updateUserStatus(name: string, status: any): Promise<IUser | null> {
        let result = await UserModel.updateOne({ name: name }, { status: status });
        let newUser = result.acknowledged === true ? await UserModel.findOne({ name: name }) : null;
        
        if (newUser !== null) {
            this.userStatusListener.notify(JSON.stringify(newUser), false);
        }
        return newUser;
    }

    
}

export default UserRepo;