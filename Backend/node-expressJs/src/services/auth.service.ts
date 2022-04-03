import { StatusList } from "../Controllers/User.controller";
import SignInHandler from "../handlers/signIn.handler";
import SignOutHandler from "../handlers/signOut.handler";
import UserStatusHandler from "../handlers/userStatus.handler";
import { IUser } from "../Models/User.model";

class AuthService {
    static authService: AuthService;
    connString: string = "";

    private constructor() {
    }

    public static getServiceInstance() {
        if (!this.authService) {
            this.authService = new AuthService();
            return this.authService;
        }
        return this.authService;
    }

    public async signInUser(name: string): Promise<IUser | null> {
        let signedInUser: IUser | undefined = await SignInHandler.getHandlerInstance().signInUser(name);
        let updatedUser: IUser | null = null;

        if (signedInUser !== undefined) {
            updatedUser = await UserStatusHandler.getHandlerInstance().updateUserStatus(name, StatusList.ACTIVE);
        }
        return updatedUser;
    }

    public async signOutUser(name: string): Promise<IUser | null> {
        let signedInUser: IUser | null = await SignOutHandler.getHandlerInstance().signOutUser(name);
        return signedInUser;
    }
}

export default AuthService;