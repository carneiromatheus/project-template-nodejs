import { Message } from '@prisma/client';

export type CreateMessageBody = Omit<Message, 'id'>;
