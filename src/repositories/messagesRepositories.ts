import prisma from '@configs/database-connection';

function getAllMessagesDB() /* TODO: type */ {
  const queryResult = prisma.message.findMany();
  return queryResult;
}

export const messagesRepositories = {
  getAllMessagesDB,
};
