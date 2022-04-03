import { Request, Response, NextFunction } from 'express';
import WebSocketManager from '../managers/websocket.manager';
import { IUser } from '../Models/User.model';
import AuthService from '../services/auth.service';

module AuthController {
    export const getUserSignedIn = async (request: Request, response: Response, next: NextFunction) => {
        let signedInUser: IUser | null = await AuthService.getServiceInstance().signInUser(request.body.name.toLowerCase());

        if (signedInUser === null) {
            response.status(401).json({ data: "Please sign in with registered name" });
        } else {
            WebSocketManager.getSocketManagerInstance().publish(JSON.stringify(signedInUser), false);
            response.status(200).json({ data: signedInUser });
        }
    };

    export const getUserSignedOut = async (request: Request, response: Response, next: NextFunction) => {
        let signedOutUser: IUser | null = await AuthService.getServiceInstance().signOutUser(request.body.name.toLowerCase());
        if (signedOutUser === null) {
            response.status(401).json({ data: "Please sign in with registered name" });
        } else {
            WebSocketManager.getSocketManagerInstance().publish(JSON.stringify(signedOutUser), false);
            response.status(200).json({ data: signedOutUser });
        }

    };
}

export default AuthController;