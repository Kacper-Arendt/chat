import { User } from '../models';

export function sleep(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

export const usersInDb = async () => {
  const users = await User.findAll({});
  return users.map((user: User) => user.toJSON());
};

export const add = (a: number, b: number) => a + b;
