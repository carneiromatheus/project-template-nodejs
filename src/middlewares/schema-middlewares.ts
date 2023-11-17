import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ObjectSchema } from 'joi';

export function validateSchemaMiddleware(type: 'body' | 'params', schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validated = schema.validate(req[type], { abortEarly: false });

    if (validated.error) {
      const errorMessage = validated.error.details.map((detail) => detail.message);
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errorMessage);
    }

    next();
  };
}
