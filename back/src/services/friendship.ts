import { Friendship } from '../models/Friendship';
import { Op } from 'sequelize';

type Status = 'PENDING' | 'ACCEPTED' | 'DENIED';

interface CreateFriendshipInterface {
  userId: string;
  friendId: string;
  status: Status;
}

export const createFriendship = async ({ userId, friendId, status }: CreateFriendshipInterface) => {
  const friendship = await Friendship.create({
    user: userId,
    friend: friendId,
    status: status,
  });
  return friendship.id;
};

export const findAllUserFriendships = async ({ userId }: { userId: string }) =>
  await Friendship.findAll({ where: { [Op.or]: [{ friend: userId }, { user: userId }] } });

interface ChangeFriendshipStatusInterface {
  friendshipId: 'string';
  status: Status;
}

export const changeFriendshipStatusService = async ({ friendshipId, status }: ChangeFriendshipStatusInterface) =>
  await Friendship.update({ status: status }, { where: { id: friendshipId } });
