"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Challenges", [
      {
        name: "Make one word",
        wordLong: 12,
        totalWords: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Make two words",
        wordLong: 10,
        totalWords: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Make three words",
        wordLong: 8,
        totalWords: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
