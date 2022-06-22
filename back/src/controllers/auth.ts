import { Request, Response } from 'express';
import { compare } from 'bcrypt';
import { generateToken } from '../utils';
import { findUserBy } from '../services';

export const login = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;

    const user = await findUserBy({ key: 'email', value: email });

    if (!user) return res.status(401).json({ error: 'Invalid Email' });

    const passwordCorrect = await compare(password, user?.passwordHash);

    if (!passwordCorrect) return res.status(401).json({ error: 'Invalid password' });

    if (user) {
      const token = generateToken({ id: user.id, email: email });

      res.status(200).send({ token, username: user.username, name: user.name, id: user.id });
    }
  } catch (e) {
    res.status(500).json({ error: 'Internal Server Error – a generic error occurred on the server' });
  }
};
