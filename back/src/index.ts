import express, { Express } from 'express';

// UTILS
import { port } from './config';
import { connectToDatabase } from './utils';

// MIDDLEWARES
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import { unknownEndpoint, errorHandler } from './middlewares';

// ROUTES
import { router } from './routes';
import { syncHandler } from './models/associations';

export const app: Express = express();
connectToDatabase().then(() => {
  syncHandler();
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/', router);

  app.use(unknownEndpoint);
  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
});
