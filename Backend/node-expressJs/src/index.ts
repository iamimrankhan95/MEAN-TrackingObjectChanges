import express, { Request, Response, Application, NextFunction } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 8000;

interface LocationWithTimezone {
  location: string;
  timezoneName: string;
  timezoneAbbr: string;
  utcOffset: number;
};

const getLocationsWithTimezones = (request: Request, response: Response, next: NextFunction) => {
  let locations: LocationWithTimezone[] = [
    {
      location: 'Germany',
      timezoneName: 'Central European Time',
      timezoneAbbr: 'CET',
      utcOffset: 1
    },
    {
      location: 'China',
      timezoneName: 'China Standard Time',
      timezoneAbbr: 'CST',
      utcOffset: 8
    },
    {
      location: 'Argentina',
      timezoneName: 'Argentina Time',
      timezoneAbbr: 'ART',
      utcOffset: -3
    },
    {
      location: 'Japan',
      timezoneName: 'Japan Standard Time',
      timezoneAbbr: 'JST',
      utcOffset: 9
    }
  ];

  response.status(200).json(locations);
};

app.get('/timezones', getLocationsWithTimezones);

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!")
});

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});