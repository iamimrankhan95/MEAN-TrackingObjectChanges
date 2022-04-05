import { Request, Response, NextFunction } from 'express';
import { IUser } from '../Models/User.model';
import UserService from '../services/user.service';
module UserController {
    const userService: UserService = UserService.getServiceInstance();

    export const readUser = async (req: Request, res: Response, next: NextFunction) => {
        let users: IUser[] = await userService.readUser();
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

        const createdUsers = await userService.createUser(users)

        res.status(200).json({ data: createdUsers });
    };

    export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        const users = await userService.deleteUser();
        res.status(200).json({ data: users });
    };

    export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
        console.log('herea:--> ');
        const user = await userService.updateUserStatus(req.body.name, req.body.status);
        res.status(200).json({ data: user });
    };

    export const getUserFriends = async (req: Request, res: Response, next: NextFunction) => {
        const users = await userService.readUser();
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