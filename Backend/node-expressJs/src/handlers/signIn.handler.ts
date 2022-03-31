import { StatusList } from "../Controllers/User.controller";
import { IUser } from "../Models/User.model";
import UserRepo from "../Repo/user.repo";

class SignInHandler {
    static isSignIn: boolean;
    static signInHandler: SignInHandler;
    constructor() {
    }

    public static getRepoInstance() {
        if (!this.signInHandler) {
            this.signInHandler = new SignInHandler();
            return this.signInHandler;
        }
        return this.signInHandler;
    }

    public async signInUser(name: string): Promise<IUser | undefined> {
        let users: IUser[] = await UserRepo.getRepoInstance().readUsers();
        let signingInUser: IUser | undefined = users.find(q => q.name.toLowerCase() === name);

        // if (signingInUser === undefined) {
        //     SignInHandler.isSignIn =false;
        // } else {
        //     signingInUser.status.name = StatusList.ACTIVE.name;
        //     signingInUser.status.color = StatusList.ACTIVE.color;
        //     const signedInUser = await UserService.updateUser(signingInUser);
        //     WebSocketManager.getSocketManagerInstance().publish(JSON.stringify(signedInUser), false);
        //     response.status(200).json({ data: signedInUser });
        // }
        return signingInUser;
    }

    disconnect() {

    }
}

export default SignInHandler;