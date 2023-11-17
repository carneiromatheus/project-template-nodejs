import httpStatus from 'http-status';
import supertest from 'supertest';
import app from '@src/app';
import prisma from '@configs/database-connection';
import { createMessage } from '@tests/factories/messages-factories';

const api = supertest(app);

beforeAll(async () => {
  await prisma.message.deleteMany();
});

afterEach(async () => {
  await prisma.message.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('GET /messages', () => {
  it(`Should return the status code 200 and all messages in the database`, async () => {
    await createMessage();
    await createMessage();

    const { status, body } = await api.get('/messages');

    expect(status).toBe(httpStatus.OK);
    expect(body).toHaveLength(2);
    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          text: expect.any(String),
        }),
      ]),
    );
  });
});
