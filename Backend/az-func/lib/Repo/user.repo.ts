// import UserStatusListener from "../listeners/userStatus.listener";

import { IUser, UserModel } from "../Models/User.model";


class UserRepo {
    static userRepo: UserRepo;
    connString: string = "";
    // userStatusListener: UserStatusListener = UserStatusListener.getHandlerInstance();
    private constructor() {
    }

    public static getRepoInstance() {
        if (!this.userRepo) {
            this.userRepo = new UserRepo();
        }
        return this.userRepo;
    }

    public async readUser(): Promise<IUser[]> {
        let users: IUser[] = await UserModel.find({});
        return users;
    }

    // async createUser(users: IUser[]): Promise<IUser[]> {
    //     // console.log('doc:--> ', doc);
    //     // const modelToInsert = new UserModel();
    //     // modelToInsert["name"] = doc.name;
    //     // modelToInsert["status"] = doc.status;
    
    //     // return await modelToInsert.save();
    //     let result = await UserModel.insertMany(users);
    //     return result;
    // }

    // async deleteUser(): Promise<IUser[]> {
    //     await UserModel.deleteMany({});
    //     // let result = await this.readUsers();
    //     return result;
    // }

    async updateUserStatus(name: string, status: any): Promise<IUser | null> {
        // let httpResult = await this.httpReqHandler.updateAzFuncUser({ name: name, status: status });
        // let newUser = httpResult;

        // if (newUser !== null) {
        //     this.userStatusListener.notify(JSON.stringify(newUser), false);
        // }

        let result = await UserModel.updateOne({ name: name }, { status: status });
        let updatedUser = null;
        if (result.acknowledged === true) {
            updatedUser = await this.findUserByName(name);
        }
        return updatedUser;
    }

    async findUserByName (name) {
        return await UserModel.findOne({ name: name });
    };

}

export default UserRepo;