import { api } from './helperTest';
import { User } from '../models';

describe('user can create an account', () => {
  const credentials = { password: 'admin12', email: 'admin31', username: 'admin123' };
  afterAll(async () => {
    await User.destroy({
      where: { email: credentials.email },
    });
  });

  it('should return error when credentials are invalid', (done) => {
    api
      .post('/users')
      .send({ password: 'admin', email: null })
      .end((req, res) => {
        expect((res: Response) => {
          expect(res.body).toContain('error');
          expect(res.body);
        });
        expect(res.status).toBe(404);
        done();
      });
  });

  it('should return new user', (done) => {
    api
      .post('/users')
      .send(credentials)
      .end((req, res) => {
        expect((res: Response) => {
          expect(res.body).toContain('email');
          expect(res.body).toContain('id');
        });
        expect(res.status).toBe(200);
        done();
      });
  });

  it('should return error when user email is taken', (done) => {
    api
      .post('/users')
      .send(credentials)
      .end((req, res) => {
        expect((res: Response) => {
          expect(res.body).toContain('error');
          expect(res.body);
        });
        expect(res.status).toBe(404);
        done();
      });
  });
});
