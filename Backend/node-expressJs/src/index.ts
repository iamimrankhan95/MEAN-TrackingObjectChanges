import express, { Request, Response, Application, NextFunction } from 'express';
import cors from 'cors';

const app: Application = express();

const PORT = process.env.PORT || 8000;
// const allowedOrigins = ['http://localhost:4200/'];
// const options: cors.CorsOptions = {
//   origin: allowedOrigins
// };

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

  console.log(request.body);
  let signedInUser: User = {
    name: 'Faysal',
    status: {
      "name": "ACTIVE",
      "color": "#4287f5"
    },
  };

  response.status(200).json({ data: signedInUser });
};

app.get('/user', readUsers);
app.post('/user/sign-in', getUserSignedIn);
app.get('/status', readStatuses);
app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!")
});

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});

interface User {
  name: string;
  status: Status;
};

interface Status {
  name: string;
  color: string;
}