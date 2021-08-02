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
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "user1@mail.com",
          password: "12345",
          name: "user 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "user2@mail.com",
          password: "12345",
          name: "user 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        individualHooks: true,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null);
  },
};
