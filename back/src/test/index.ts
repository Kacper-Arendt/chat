// import { sleep } from './helperTest';
// import { app } from '../';
// import supertest from 'supertest';
//
// const api = supertest(app);
//
// beforeAll(async () => {
//   console.log('beforeAll');
//   await sleep(12);
//   console.log('After   All');
// });
//
// describe('something', () => {
//   it('should do something', async () => {
//     api
//       .post('/users')
//       .send({ password: 'admin123', username: 'asdas', email: 'asdas' })
//       .then(({ statusCode }) => {
//         expect(statusCode).toEqual(200);
//       });
//   });
// });
