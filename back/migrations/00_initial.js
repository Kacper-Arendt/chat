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
        unique: true,
        allowNull: false,
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
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
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('users');
  },
};
