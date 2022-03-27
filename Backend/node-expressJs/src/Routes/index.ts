
import UserController from "../Controllers/User.controller"
import { RoutesInput } from "../Types/types"
import express, { Request, Response, Application, NextFunction } from 'express';
import { IUser } from "../Models/User.model";

export default ({ app }: RoutesInput) => {
    app.get("/api/user", readUsers)
    app.post("/api/user", createUser)
    app.delete("/api/user", deleteUser)
    app.put('/api/user', updateUser);
    app.get('/api/user/init-users', initUserTable);
}

const readUsers = async (req: Request, res: Response, next: NextFunction) => {
    let users: IUser[] = await UserController.readUsers();

    res.status(200).json({ data: users });
};

const createUser = (req: Request, res: Response, next: NextFunction) => {
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

const getUserSignedIn = (request: Request, response: Response, next: NextFunction) => {
    let signedInUser: IUser = {
        name: 'Faysal',
        status: {
            "name": "ACTIVE",
            "color": "#4287f5"
        },
    };

    response.status(200).json({ data: signedInUser });
};

const initUserTable = async (req: Request, res: Response, next: NextFunction) => {
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

    const user = await UserController.createUsers(users)

    res.status(200).json({ data: users });
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const users = await UserController.deleteUsers()
    res.status(200).json({ data: users });
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.body);
    const user = await UserController.updateUser(req.body);
    // console.log('user:--> ', user);
    res.status(200).json({ data: user });
};