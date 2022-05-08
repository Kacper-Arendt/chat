import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../utils/db';

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
      unique: true,
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    public: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
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
