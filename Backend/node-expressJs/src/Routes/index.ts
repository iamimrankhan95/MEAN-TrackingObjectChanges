
import UserController from "../Controllers/User.controller"
import { RoutesInput } from "../Types/types"
import express, { Request, Response, Application, NextFunction } from 'express';
import { IUser } from "../Models/User.model";

export default ({ app }: RoutesInput) => {
    app.get("/api/user", readUsers);
    app.post("/api/user", createUser);
    app.delete("/api/user", deleteUser);
    app.put('/api/user', updateUser);
    app.post('/api/user/sign-in', getUserSignedIn);
    app.put('/api/user/sign-out', getUserSignedOut);
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

const getUserSignedIn = async (request: Request, response: Response, next: NextFunction) => {
    let users: IUser[] = await UserController.readUsers();
    let signingInUser: IUser | undefined = users.find(q => q.name === request.body.name);

    if (signingInUser === undefined) {
        response.status(401).json({ data: "Please sign in with registered name" });
    } else {
        signingInUser.status.name = StatusList.ACTIVE.name;
        signingInUser.status.color = StatusList.ACTIVE.color;
        const signedInUser = await UserController.updateUser(signingInUser);
        response.status(200).json({ data: signedInUser });
    }
};

const getUserSignedOut = async (request: Request, response: Response, next: NextFunction) => {
    let signingOutUser: IUser = request.body;
    const signedInUser = await UserController.updateUser(signingOutUser);
    response.status(200).json({ data: "Signed out successfully" });

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
        },        {
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

    const createdUsers = await UserController.createUsers(users)

    res.status(200).json({ data: createdUsers });
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
