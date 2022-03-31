import { Request, Response, NextFunction } from 'express';
import WebSocketManager from '../managers/websocket.manager';
import { IUser } from '../Models/User.model';
import UserService from '../services/user.service';
module UserController {
    export const readUsers = async (req: Request, res: Response, next: NextFunction) => {
        let users: IUser[] = await UserService.readUsers();

        res.status(200).json({ data: users });
    };

    export const createUser = (req: Request, res: Response, next: NextFunction) => {
        let users: IUser[] = [
            {
                name: 'Faysal',
                status: {
                    "name": "ACTIVE",
                    "color": "#4287f5"
                },
            },
            {
                name: 'Akhtar',
                status: {
                    "name": "OFFLINE",
                    "color": "#c4c4c4"
                },
            },
            {
                name: 'Jannat',
                status: {
                    "name": "BUSY",
                    "color": "#f20707"
                },
            },
        ];

        res.status(200).json({ data: users });
    };

    export const initUserTable = async (req: Request, res: Response, next: NextFunction) => {
        let users: IUser[] = [
            {
                name: 'Faysal',
                status: {
                    "name": "ACTIVE",
                    "color": "#4287f5"
                },
            },
            {
                name: 'Akhtar',
                status: {
                    "name": "OFFLINE",
                    "color": "#c4c4c4"
                },
            },
            {
                name: 'Jannat',
                status: {
                    "name": "BUSY",
                    "color": "#f20707"
                },
            }, {
                name: 'Manna',
                status: {
                    "name": "ACTIVE",
                    "color": "#4287f5"
                },
            },
            {
                name: 'Ishtiaq',
                status: {
                    "name": "OFFLINE",
                    "color": "#c4c4c4"
                },
            },
            {
                name: 'Sadman',
                status: {
                    "name": "BUSY",
                    "color": "#f20707"
                },
            },
            {
                name: 'Imran',
                status: {
                    "name": "BUSY",
                    "color": "#f20707"
                },
            },
        ];

        const createdUsers = await UserService.createUsers(users)

        res.status(200).json({ data: createdUsers });
    };

    export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        const users = await UserService.deleteUsers()
        res.status(200).json({ data: users });
    };

    export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
        // console.log(req.body);
        const user = await UserService.updateUser(req.body);
        WebSocketManager.getSocketManagerInstance().publish(JSON.stringify(user), false);
        // console.log('user:--> ', user);
        // res.status(200).json({ data: user });
    };

    export const getUserFriends = async (req: Request, res: Response, next: NextFunction) => {
        // console.log(req.body);
        const users = await UserService.readUsers();
        res.status(200).json({ data: users.filter(q => q.name !== req.params.name) });
    };
}

export default UserController;

export const StatusList = {
    ACTIVE: {
        "name": "ACTIVE",
        "color": "#4287f5"
    },
    OFFLINE: {
        "name": "OFFLINE",
        "color": "#c4c4c4"
    },
    BUSY: {
        "name": "BUSY",
        "color": "#f20707"
    },
}