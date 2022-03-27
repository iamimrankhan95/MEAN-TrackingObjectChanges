import express, { Request, Response, Application, NextFunction } from 'express';
import cors from 'cors';
import 'dotenv/config'
import ConnectMongoDb from "./connect-mongodb"
import Routes from "./Routes"


const app: Application = express();
// const client = mongodb.MongoClient;
declare var process : {
  env: {
    PORT : number,
    HOST: string
  }
}
const PORT: number = process.env.PORT;
const HOST: string = process.env.HOST;
const db = `mongodb://${HOST}:27017/testApp`


app.use(cors());
app.use(express.json());


ConnectMongoDb({ db });
Routes({ app })

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!")
});

app.listen(PORT, HOST, (): void => {
  console.log(`Server Running here 👉 http://${HOST}:${PORT}`);
});


