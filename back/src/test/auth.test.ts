import { sleep } from './helperTest';
import { app } from '../';
import supertest from 'supertest';

const api = supertest(app);

beforeAll(async () => {
  await sleep(3);
});

describe('user login', () => {
  const credentials = { password: 'admin', email: 'admin' };

  test('should login with credentials and return  body', (done) => {
    api
      .post('/login/')
      .send(credentials)
      .end((req, res) => {
        expect((res: Response) => {
          expect(res.body).toContain('token');
          expect(res.body).toContain('username');
          expect(res.body).toContain('name');
          expect(res.body).toContain('id');
        });
        expect(res.status).toBe(200);
        done();
      });
  });

  test('should return 401 if credentials are invalid', (done) => {
    api
      .post('/login/')
      .send({ password: 'admins', email: 'admin' })
      .end((req, res) => {
        expect((res: Response) => {
          expect(res.body).toContain('error');
        });
        expect(res.status).toBe(401);
        done();
      });
  });
  test('should return 401 if email is invalid', (done) => {
    api
      .post('/login/')
      .send({ password: 'admin', email: 'admins' })
      .end((req, res) => {
        expect((res: Response) => {
          expect(res.body).toContain('error');
        });
        expect(res.status).toBe(401);
        done();
      });
  });
});
