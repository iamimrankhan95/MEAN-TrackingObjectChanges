import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config'
import Routes from "./Routes"
import DbManager from './managers/db.manager';
import WebSocketManager from './managers/websocket.manager';

const app: Application = express();

app.use(cors());
app.use(express.json());

const expressServer = app.listen(process.env.PORT, process.env.HOST, (): void => {
  console.log(`Server Running here 👉 http://${process.env.HOST}:${process.env.PORT}`);
});

Routes({ app })
const mongodb = new DbManager(process.env.DATABASE).connectToDb();
const ws = WebSocketManager.getManagerInstance().establishSocket(expressServer, process.env.WEBSOCKET_URL);

declare var process: {
  env: {
    PORT: number,
    SOCKET_PORT: number,
    HOST: string,
    DATABASE:string,
    WEBSOCKET_URL:string
  }
}