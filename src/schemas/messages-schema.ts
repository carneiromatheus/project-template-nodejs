import Joi from 'joi';
import { CreateMessageBody } from '@protocols/message-protocols';

export const messageSchema = Joi.object<CreateMessageBody>({
  text: Joi.string().required(),
});
