import { Router } from 'express';
import { messagesControllers } from '@controllers/messages-controllers';

const messagesRouters: Router = Router();

messagesRouters.get('/messages', messagesControllers.readAllMessages);

export default messagesRouters;
