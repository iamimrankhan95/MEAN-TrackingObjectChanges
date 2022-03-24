
import UserController from "../Controllers/User.controller"
import { RoutesInput } from "../Types/types"
import express, { Request, Response, Application, NextFunction } from 'express';
import { IUser } from "../Models/User.model";

export default ({ app }: RoutesInput) => {
    app.get("/api/user", readUsers)
    app.post("/api/user", createUser)
    app.post('/api/user/sign-in', getUserSignedIn);
}

const readUsers = (req: Request, res: Response, next: NextFunction) => {
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