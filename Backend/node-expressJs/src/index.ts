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
const db = "mongodb://localhost:27017/test"

// ConnectMongoDb({ db });
Routes({ app })
app.use(cors());
// app.use(express.json());





const readUsers = (request: Request, response: Response, next: NextFunction) => {
  let users: User[] = [
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

  response.status(200).json({ data: users });
};

const readStatuses = (request: Request, response: Response, next: NextFunction) => {
  let statuses: Status[] = [
    {
      "name": "ACTIVE",
      "color": "#4287f5"
    },
    {
      "name": "BUSY",
      "color": "#f20707"
    },
    {
      "name": "OFFLINE",
      "color": "#c4c4c4"
    },
    {
      "name": "MEETING",
      "color": "#ed522b"
    }
  ]

  response.status(200).json({ data: statuses });
};

const getUserSignedIn = (request: Request, response: Response, next: NextFunction) => {
  let signedInUser: User = {
    name: 'Faysal',
    status: {
      "name": "ACTIVE",
      "color": "#4287f5"
    },
  };

  response.status(200).json({ data: signedInUser });
};





// app.get('/user', readUsers);
// app.post('/user/sign-in', getUserSignedIn);
// app.get('/status', readStatuses);
app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!")
});

app.listen(PORT, HOST, (): void => {
  console.log(`Server Running here 👉 http://${HOST}:${PORT}`);
});



interface User {
  name: string;
  status: Status;
};

interface Status {
  name: string;
  color: string;
}