import { Request, Response } from 'express';
import { compare } from 'bcrypt';
import { User } from '../models';
import { generateToken } from '../utils';

export const login = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    const passwordCorrect = user === null ? false : await compare(password, user?.passwordHash);

    if (!(passwordCorrect || !user)) return res.status(401).json({ error: 'Invalid password or username' });

    if (user) {
      const token = generateToken({ id: user.id, email: email });

      res.status(200).send({ token, username: user.username, name: user.name, id: user.id });
    }
  } catch (e) {
    res.status(500).json({ error: 'Internal Server Error – a generic error occurred on the server' });
  }
};
