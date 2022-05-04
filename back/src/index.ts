import express, { Express, Request, Response } from 'express';

// UTILS
import { port } from './config';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { connectToDatabase } from './utils/db';

const app: Express = express();

connectToDatabase();
// MIDDLEWARE
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send(`Express + TypeScript Server is running on port ${port}`);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
