import { messagesRepositories } from '@repositories/messagesRepositories';

async function getAllMessages() /* TODO: type */ {
  const negotiationResult = await messagesRepositories.getAllMessagesDB();
  return negotiationResult;
}

export const messagesServices = {
  getAllMessages,
};
