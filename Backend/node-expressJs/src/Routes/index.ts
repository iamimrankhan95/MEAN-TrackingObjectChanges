
import { RoutesInput } from "../Types/types"
import { Request, Response } from 'express';
import UserController from "../Controllers/User.controller";
// var x = require('../Controllers/Status.controller');
import  statusRouter  from "../Controllers/Status.controller";


const routes = ({ app }: RoutesInput) => {
    app.get("/", (req: Request, res: Response): void => {
        res.send("Hello Typescript with Node.js!")
      });

    app.get("/api/user", UserController.readUsers);
    app.post("/api/user", UserController.createUser);
    app.delete("/api/user", UserController.deleteUser);
    app.put('/api/user', UserController.updateUser);
    app.post('/api/user/sign-in', UserController.getUserSignedIn);
    app.put('/api/user/sign-out', UserController.getUserSignedOut);
    app.get('/api/user/init-users', UserController.initUserTable);
    app.get('/api/user/:name', UserController.getUserFriends);
    app.use("/status", statusRouter);
}

export default routes;


