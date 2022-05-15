import { User } from '../models';
import supertest from 'supertest';
import { app } from '../';

export function sleep(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

export const api = supertest(app);

export const usersInDb = async () => {
  const users = await User.findAll({});
  return users.map((user: User) => user.toJSON());
};

export const add = (a: number, b: number) => a + b;
