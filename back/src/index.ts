import express, { Express, Request, Response } from 'express';

// UTILS
import { port } from 'config';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`Express + TypeScript Server is running on port ${port}`);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
