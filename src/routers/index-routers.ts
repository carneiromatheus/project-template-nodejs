import { Router } from 'express';
import messagesRouters from '@routers/messages-router';

const routers: Router = Router();

routers.use(messagesRouters);

export default routers;
