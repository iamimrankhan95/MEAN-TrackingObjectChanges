import { StatusList } from "../Controllers/User.controller";
import { IUser } from "../Models/User.model";
import UserRepo from "../Repo/user.repo";

class SignInHandler {
    static isSignIn: boolean;
    static signInHandler: SignInHandler;
    constructor() {
    }

    public static getHandlerInstance() {
        if (!this.signInHandler) {
            this.signInHandler = new SignInHandler();
            return this.signInHandler;
        }
        return this.signInHandler;
    }

    public async signInUser(name: string): Promise<IUser | undefined> {
        let users: IUser[] = await UserRepo.getRepoInstance().readUsers();
        let signedInUser: IUser | undefined = users.find(q => q.name.toLowerCase() === name);
        return signedInUser;
    }

    disconnect() {

    }
}

export default SignInHandler;