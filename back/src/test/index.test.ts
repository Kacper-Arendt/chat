import { app } from '../';
import supertest from 'supertest';
import { connected, connectToDatabase } from '../utils';

const api = supertest(app);

describe('something', () => {
  let setInBeforeAll;

  beforeAll(async () => {
    connected;
  });

  it('should do something', async () => {
    const data = await api.post('/users').send({ password: 'admin123', username: 'asdas', email: 'asdas' });
    await expect(data.statusCode).toEqual(200);
  });
});
