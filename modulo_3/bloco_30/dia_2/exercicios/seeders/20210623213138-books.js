'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: "Doutor Sono",
        author: "Stephan King",
        pageQuantity: 535,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: "Harry Potter e a pedra filosofal",
        author: "J.K Rolling",
        pageQuantity: 354,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};