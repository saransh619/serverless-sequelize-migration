'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'Post 1',
        content: 'Content for Post 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Post 2',
        content: 'Content for Post 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};