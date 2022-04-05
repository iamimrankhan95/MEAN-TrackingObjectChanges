import UserListHandler from '../handlers/userList.handler';
import UserStatusHandler from '../handlers/userStatus.handler';
import { IUser } from '../Models/User.model';


class UserService {
    static userService: UserService;
    connString: string = "";
    userListHandler: UserListHandler = UserListHandler.getHandlerInstance();
    userStatusHandler: UserStatusHandler = UserStatusHandler.getHandlerInstance();

    private constructor() {
    }

    public static getServiceInstance() {
        if (!this.userService) {
            this.userService = new UserService();
        }
        return this.userService;
    }

    public async readUser(): Promise<IUser[]> {
        let result = await this.userListHandler.readUser();
        return result;
    }
    public async createUser(users: IUser[]): Promise<IUser[]> {
        let result = await this.userListHandler.createUser(users);
        return result;
    }
    public async deleteUser(): Promise<IUser[]> {
        let result = await this.userListHandler.deleteUser();
        return result;
    }

    public async updateUserStatus(name: string, Status: any): Promise<IUser | null> {
        let result = await this.userStatusHandler.updateUserStatus(name, Status);
        return result;
    }

    // public async updateUser(user:IUser): Promise<IUser | null> {
    //     let result = await UserListHandler.getHandlerInstance().updateUser(user);
    //     return result;
    // }
}

export default UserService;