import { User } from '../models';
import { hash } from 'bcrypt';
import { Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll({
    attributes: { exclude: ['passwordHash'] },
  });

  if (users.length === 0) {
    return res.status(404).json({ error: 'No users' });
  }
  return res.status(200).json(users);
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { password, username, email } = req.body;

    console.log('password', password);

    const existingUser = await User.findOne({
      where: { email: email },
    });

    if (existingUser) {
      return res.status(404).json({ error: 'Email already exists' });
    }

    const saltRounds = 10;
    const passwordHash = await hash(password, saltRounds);

    const newUser: User = await User.create({ passwordHash, email, username });

    return res.status(200).json({ id: newUser.id, email, username });
  } catch (e) {
    res.status(500).json(e);
  }
};
