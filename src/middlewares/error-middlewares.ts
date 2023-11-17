import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

export function errorHandlerMiddleware(error: Error, _req: Request, res: Response, _next: NextFunction) {
  console.log(error); //TODO: refatorar utilizando alguma ferramenta de log

  switch (error.name) {
    case 'badRequest':
      return res.status(httpStatus.BAD_REQUEST).send('(400 Bad Request): ' + error.message);

    case 'unauthorized':
      return res.status(httpStatus.BAD_REQUEST).send('(401 Bad Request): ' + error.message);

    case 'notFound':
      return res.status(httpStatus.NOT_FOUND).send('(404 Not found): ' + error.message);

    case 'conflict':
      return res.status(httpStatus.CONFLICT).send('(409 Conflict): ' + error.message);

    case 'unprocessable':
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send('(422 Unprocessable entity): ' + error.message);

    default:
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send("(500 Internal Server Error): Sorry, something didn't work out as expected!");
  }
}
