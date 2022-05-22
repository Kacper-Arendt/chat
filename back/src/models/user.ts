import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../utils';

export class User extends Model {
  declare id: string;
  declare email: string;
  declare username: string;
  declare passwordHash: string;
  declare name: string;
  declare surname: string;
  declare age: number;
  declare public: boolean;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
    },
    passwordHash: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.SMALLINT,
    },
    public: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'user',
  }
);
