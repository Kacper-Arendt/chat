import { Friendship } from '../models/Friendship';
import { Op } from 'sequelize';

interface CreateFriendshipInterface {
  userId: string;
  friendId: string;
  status: 'PENDING' | 'ACCEPTED' | 'DENIED';
}

export const createFriendship = async ({ userId, friendId, status }: CreateFriendshipInterface) => {
  const friendship = await Friendship.create({
    user: userId,
    friend: friendId,
    status: status,
  });
  return friendship.id;
};

interface findAllUserFriendships {
  userId: string;
}
export const findAllUserFriendships = async ({ userId }: findAllUserFriendships) =>
  await Friendship.findAll({ where: { [Op.or]: [{ friend: userId }, { user: userId }] } });
