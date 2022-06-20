import { User } from '../models';
import { hash } from 'bcrypt';
import { Request, Response } from 'express';
import { checkIfNull } from '../utils';
import { Friendship } from '../models/Friendship';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAndCountAll({
      attributes: { exclude: ['passwordHash'] },
      include: [Friendship],
    });

    if (users.count === 0) return res.status(404).json({ error: 'No users' });

    return res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'The server cannot get users' });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.decodedToken?.id;

    const user = await User.findByPk(userId, {
      attributes: { exclude: ['passwordHash'] },
      include: [Friendship],
    });

    if (user === null) return res.status(404).json({ error: 'Not found' });

    return res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: 'The server cannot find the user' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { password, username, email } = req.body;

    if (Object.keys(req.body).length < 3 || checkIfNull(password) || checkIfNull(username) || checkIfNull(email)) {
      return res.status(404).json({ error: 'Data not provided' });
    }

    const existingUser = await User.findOne({
      where: { email: email },
    });

    if (existingUser) return res.status(404).json({ error: 'Email already exists' });

    const saltRounds = 10;
    const passwordHash = await hash(password, saltRounds);

    const newUser: User = await User.create({ passwordHash, email, username });

    return res.status(200).json({ id: newUser.id, email, username });
  } catch (e) {
    res.status(500).json({ error: 'The server cannot create the user' });
    console.log(e);
  }
};

export const addFriend = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const userId = req.decodedToken?.id;

    if (!id || id.length === 0) {
      return res.status(404).json({ error: 'Id is required' });
    }

    // const user = await User.findOne({
    //   where: { id: userId },
    // });

    // const arra = await Friendship.findOne({ where: { [Op.or]: [{ authorId: 12 }, { authorId: 13 }] } });

    await Friendship.create({
      user: userId,
      friend: id,
      status: 'PENDING',
    });

    return res.status(200).json({ status: 'success' });
  } catch (e) {
    res.status(500).json({ error: 'The server cannot create the user' });
    console.log(e);
  }
};
