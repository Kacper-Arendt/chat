import { Request, Response } from 'express';
import { changeFriendshipStatusService, createFriendship } from '../services';
import { User } from '../models';

export const addFriend = async (req: Request, res: Response) => {
  try {
    const { friendId } = req.body;
    const userId = req.decodedToken?.id;

    if (!friendId || friendId.length === 0) return res.status(404).json({ error: 'Id is required' });
    if (userId === friendId) return res.status(404).json({ error: 'friend id and user id are equal' });

    const friend = await User.findByPk(friendId);

    if (friend && userId) {
      const friendshipId = await createFriendship({ friendId: friend.id, userId, status: 'PENDING' });
      return res.status(200).json({ status: 'success', friendshipId });
    }
  } catch (e) {
    res.status(500).json({ error: 'The server cannot create the user' });
    console.log(e);
  }
};

export const changeFriendshipStatus = async (req: Request, res: Response) => {
  try {
    const { friendshipId, status } = req.body;
    if (!friendshipId || friendshipId.length === 0) return res.status(404).json({ error: 'Id is required' });

    await changeFriendshipStatusService({ friendshipId, status });

    return res.status(200).json({ status: 'success' });
  } catch (e) {
    res.status(500).json({ error: 'The server cannot change friendship status' });
  }
};