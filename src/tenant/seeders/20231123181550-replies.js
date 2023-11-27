'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Replies', [
      {
        content: 'Reply 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Reply 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Replies', null, {});
  },
};