import { User } from '../models';

export const findAllUsers = async () =>
  User.findAndCountAll({
    attributes: { exclude: ['passwordHash'] },
    include: [
      { model: User, as: 'friend', attributes: ['id'] },
      { model: User, as: 'friends', attributes: ['id'] },
    ],
  });

interface FindUserByIdInterface {
  userId: string;
}

export const findUserById = async ({ userId }: FindUserByIdInterface) =>
  User.findByPk(userId, {
    attributes: { exclude: ['passwordHash'] },
  });

interface FindUserByInterface {
  key: string;
  value: string | number;
}

export const findUserBy = async ({ key, value }: FindUserByInterface) =>
  User.findOne({
    where: { [key]: value },
  });

interface CreateUserInterface {
  passwordHash: string;
  email: string;
  username: string;
}

export const createUser = async ({ email, username, passwordHash }: CreateUserInterface) =>
  User.create({ passwordHash, username, email });
