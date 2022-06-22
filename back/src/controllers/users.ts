import { User } from '../models';
import { hash } from 'bcrypt';
import { Request, Response } from 'express';
import { checkIfNull } from '../utils';
import {
  findAllUserFriendships,
  findAllUsers,
  findUserBy,
  findUserById,
  createUser as createUserService,
} from '../services';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await findAllUsers();

    if (users.count === 0) return res.status(404).json({ error: 'No users' });

    return res.status(200).json({ users });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'The server cannot get users' });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.decodedToken?.id;

    if (!userId) return res.status(404).json({ error: 'Id not found' });

    const user = await findUserById({ userId });

    if (user === null) return res.status(404).json({ error: 'Not found' });

    const friendships = await findAllUserFriendships({ userId: user.id });

    return res.status(200).json({ user, friendships });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'The server cannot find the user' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { password, username, email } = req.body;

    if (Object.keys(req.body).length < 3 || checkIfNull(password) || checkIfNull(username) || checkIfNull(email)) {
      return res.status(404).json({ error: 'Data not provided' });
    }

    const existingUser = await findUserBy({ key: 'email', value: email });

    if (existingUser) return res.status(404).json({ error: 'Email already exists' });

    const saltRounds = 10;
    const passwordHash = await hash(password, saltRounds);

    const newUser: User = await createUserService({ passwordHash, email, username });

    return res.status(200).json({ id: newUser.id, email, username });
  } catch (e) {
    res.status(500).json({ error: 'The server cannot create the user' });
    console.log(e);
  }
};
