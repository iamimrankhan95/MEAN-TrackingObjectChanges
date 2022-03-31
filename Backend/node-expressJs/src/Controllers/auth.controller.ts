import { Request, Response, NextFunction } from 'express';
import SignInHandler from '../handlers/signIn.handler';
import UserStatusHandler from '../handlers/userStatus.handler';
import WebSocketManager from '../managers/websocket.manager';
import { IUser } from '../Models/User.model';
import UserService from '../services/user.service';
import { StatusList } from './User.controller';

module AuthController {
    export const getUserSignedIn = async (request: Request, response: Response, next: NextFunction) => {
        let signingInUser: IUser | undefined = await SignInHandler.getRepoInstance().signInUser(request.body.name.toLowerCase());

        if (signingInUser === undefined) {
            response.status(401).json({ data: "Please sign in with registered name" });
        } else {
            const signedInUser = await UserStatusHandler.getHandlerInstance().updateUserStatus(signingInUser, StatusList.ACTIVE);
            if (signedInUser) {
                WebSocketManager.getSocketManagerInstance().publish(JSON.stringify(signedInUser), false);
            }
            response.status(200).json({ data: signedInUser });
        }
    };

    export const getUserSignedOut = async (request: Request, response: Response, next: NextFunction) => {
        let signingOutUser: IUser = request.body;
        const signedOutUser = await UserService.updateUser(signingOutUser);
        WebSocketManager.getSocketManagerInstance().publish(JSON.stringify(signedOutUser), false);
        response.status(200).json({ data: "Signed out successfully" });

    };
}

export default AuthController;