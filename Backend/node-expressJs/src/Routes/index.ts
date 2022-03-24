
import UserController from "../Controllers/User.controller"
import { RoutesInput } from "../Types/types"
import express, { Request, Response, Application, NextFunction } from 'express';
import { IUser } from "../Models/User.model";

export default ({ app }: RoutesInput) => {
    app.get("/api/user", readUsers)
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