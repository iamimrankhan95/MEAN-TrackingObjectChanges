import express, { Request, Response, Application, NextFunction, json } from 'express';
import cors from 'cors';
import 'dotenv/config'
import ConnectMongoDb from "./connect-mongodb"
import Routes from "./Routes"
import WebSocket, { WebSocketServer } from 'ws';
import http, { Server } from "http";
import wsManager from "./websocket"

const app: Application = express();

declare var process: {
  env: {
    PORT: number,
    SOCKET_PORT: number,
    HOST: string,
  }
}
const PORT: number = process.env.PORT;
const HOST: string = process.env.HOST;
const db = `mongodb://${HOST}:27017/testApp`
// const db = `mongodb://databaseMongo:27017/testApp`
// const wss = new WebSocketServer({ port: process.env.PORT, path:"/websockets/" });

 
app.use(cors());
app.use(express.json());

ConnectMongoDb({ db });
Routes({ app })



app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!")
});

const expressServer = app.listen(PORT, HOST, (): void => {
  console.log(`Server Running here 👉 http://${HOST}:${PORT}`);
});


wsManager.connect(expressServer);