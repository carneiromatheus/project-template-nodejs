import httpStatus from 'http-status';
import supertest from 'supertest';
import app from '@src/app';

const api = supertest(app);

describe('A API esta OK?', () => {
  it(`Should return the status code 200 and a message "I'm OK"`, async () => {
    const { status, text } = await api.get('/health');

    expect(status).toBe(httpStatus.OK);
    expect(text).toBe("I'm OK!");
  });
});
