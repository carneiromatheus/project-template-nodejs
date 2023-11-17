import { faker } from '@faker-js/faker';
import prisma from '@configs/database-connection';

export async function createMessage(text?: string) {
  return prisma.message.create({
    data: { text: text || faker.lorem.sentence() },
  });
}
