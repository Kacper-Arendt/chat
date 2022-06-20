import { User } from './user';
import { Friendship } from './Friendship';

export const syncHandler = () => {
  User.hasMany(Friendship, { foreignKey: 'user' });
  User.hasMany(Friendship, { foreignKey: 'friend' });
};
