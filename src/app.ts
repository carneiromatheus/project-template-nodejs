import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import httpStatus from 'http-status';
import routers from '@routers/index-routers';
import { errorHandlerMiddleware } from '@middlewares/error-middlewares';

const app = express();

app
  .use(express.json())
  .use(cors())
  .use(routers)
  .get('/health', (req: Request, res: Response) => res.status(httpStatus.OK).send("I'm OK!"))
  .use(errorHandlerMiddleware);

export default app;
