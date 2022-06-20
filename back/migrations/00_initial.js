const { DataTypes } = require('sequelize');

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
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
      image: {
        type: DataTypes.STRING,
      },
    });
    await queryInterface.createTable('friendships', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      user: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      friend: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('PENDING', 'ACCEPTED', 'DENIED'),
        allowNull: false,
        defaultValue: 'PENDING',
      },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('friendships');
  },
};
