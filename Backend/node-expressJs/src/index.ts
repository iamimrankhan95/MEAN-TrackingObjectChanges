import express, { Request, Response, Application, NextFunction } from 'express';
import cors from 'cors';
import 'dotenv/config'
import ConnectMongoDb from "./connect-mongodb"
import Routes from "./Routes"
import WebSocket, { WebSocketServer } from 'ws';
import http, { Server } from "http";

const app: Application = express();
// const server:Server = http.createServer(app);
// const client = mongodb.MongoClient;
declare var process: {
  env: {
    PORT: number,
    HOST: string
  }
}
const PORT: number = process.env.PORT;
const HOST: string = process.env.HOST;
const db = `mongodb://${HOST}:27017/testApp`
// const ws = new WebSocket('ws://www.host.com/path');
// const wss = new WebSocketServer({ port: process.env.PORT });
const wss = new WebSocketServer({ port: 8081 });

app.use(cors());
app.use(express.json());

ConnectMongoDb({ db });
Routes({ app })

wss.on('connection', function connection(ws) {
  console.log('welcome new client');

  ws.on('message', function message(data,isBinary) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  
});

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!")
});

app.listen(PORT, HOST, (): void => {
  console.log(`Server Running here 👉 http://${HOST}:${PORT}`);
});


