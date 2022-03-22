import express, { Request, Response, Application, NextFunction } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 8000;

interface User {
  name: string;
  status: Status;
};

interface Status {
  name: string;
  color: string;
}

const readUsers = (request: Request, response: Response, next: NextFunction) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");
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
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");
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

app.get('/user', readUsers);
app.get('/status', readStatuses);

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!")
});

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});