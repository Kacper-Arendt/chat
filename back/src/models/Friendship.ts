import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../utils';

export class Friendship extends Model {
  declare status: 'PENDING' | 'ACCEPTED' | 'DENIED';
}

Friendship.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    friend: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    status: {
      type: DataTypes.ENUM('PENDING', 'ACCEPTED', 'DENIED'),
      allowNull: false,
      defaultValue: 'PENDING',
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'friendship',
  }
);
