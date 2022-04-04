import { StatusList } from "../Controllers/User.controller";
import { IUser } from "../Models/User.model";
import UserRepo from "../Repo/user.repo";

class SignOutHandler {
    static isSignIn: boolean;
    static signInHandler: SignOutHandler;
    constructor() {
    }

    public static getHandlerInstance() {
        if (!this.signInHandler) {
            this.signInHandler = new SignOutHandler();
        }
        return this.signInHandler;
    }

    public async signOutUser(name: string): Promise<IUser | null> {
        const signedOutUser = await UserRepo.getRepoInstance().updateUserStatus(name, StatusList.OFFLINE);
        return signedOutUser;
    }
}

export default SignOutHandler;