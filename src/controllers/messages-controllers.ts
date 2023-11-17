import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { messagesServices } from '@services/messages-services';

async function readAllMessages(req: Request, res: Response) {
  const messages = await messagesServices.getAllMessages();
  res.status(httpStatus.OK).send(messages);
}

export const messagesControllers = {
  readAllMessages,
};
