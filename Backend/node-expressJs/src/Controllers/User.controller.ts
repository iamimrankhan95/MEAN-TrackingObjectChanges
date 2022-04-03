import { Request, Response, NextFunction } from 'express';
import WebSocketManager from '../managers/websocket.manager';
import { IUser } from '../Models/User.model';
import UserService from '../services/user.service';
module UserController {
    export const readUser = async (req: Request, res: Response, next: NextFunction) => {
        let users: IUser[] = await UserService.getServiceInstance().readUser();
        res.status(200).json({ data: users });
    };

    // export const createUser = (req: Request, res: Response, next: NextFunction) => {
    //     let users: IUser[] = [
    //         {
    //             name: 'Faysal',
    //             status: {
    //                 "name": "ACTIVE",
    //                 "color": "#4287f5"
    //             },
    //         },
    //         {
    //             name: 'Akhtar',
    //             status: {
    //                 "name": "OFFLINE",
    //                 "color": "#c4c4c4"
    //             },
    //         },
    //         {
    //             name: 'Jannat',
    //             status: {
    //                 "name": "BUSY",
    //                 "color": "#f20707"
    //             },
    //         },
    //     ];

    //     res.status(200).json({ data: users });
    // };

    export const initUserTable = async (req: Request, res: Response, next: NextFunction) => {
        let users: IUser[] = [
            {
                name: 'faysal',
                status: {
                    "name": "OFFLINE",
                    "color": "#c4c4c4"
                },
            },
            {
                name: 'akhtar',
                status: {
                    "name": "OFFLINE",
                    "color": "#c4c4c4"
                },
            },
            {
                name: 'jannat',
                status: {
                    "name": "OFFLINE",
                    "color": "#c4c4c4"
                },
            }, {
                name: 'manna',
                status: {
                    "name": "OFFLINE",
                    "color": "#c4c4c4"
                },
            },
            {
                name: 'ishtiaq',
                status: {
                    "name": "OFFLINE",
                    "color": "#c4c4c4"
                },
            },
            {
                name: 'sadman',
                status: {
                    "name": "OFFLINE",
                    "color": "#c4c4c4"
                },
            },
            {
                name: 'imran',
                status: {
                    "name": "OFFLINE",
                    "color": "#c4c4c4"
                },
            },
        ];

        const createdUsers = await UserService.getServiceInstance().createUser(users)

        res.status(200).json({ data: createdUsers });
    };

    export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        const users = await UserService.getServiceInstance().deleteUser();
        res.status(200).json({ data: users });
    };

    export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
        const user = await UserService.getServiceInstance().updateUserStatus(req.body.name, req.body.status);
        // WebSocketManager.getSocketManagerInstance().publish(JSON.stringify(user), false);
    };

    export const getUserFriends = async (req: Request, res: Response, next: NextFunction) => {
        const users = await UserService.getServiceInstance().readUser();
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