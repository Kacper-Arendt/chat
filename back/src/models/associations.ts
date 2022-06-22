import { User } from './user';
import { Friendship } from './Friendship';

export const syncHandler = () => {
  User.belongsToMany(User, { as: 'friends', through: Friendship, foreignKey: 'user' });
  User.belongsToMany(User, { as: 'friend', through: Friendship, foreignKey: 'friend' });
};
