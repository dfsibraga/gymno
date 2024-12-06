"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    const settingsId = await queryInterface.rawSelect(
      "settings",
      { where: {}, limit: 1 },
      ["id"]
    );
    if (!settingsId) {
      return queryInterface.bulkInsert("settings", [
        {
          email: "dfsi@dfsi.pt",
          password: bcrypt.hashSync("123456"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("settings", null, {});
  },
};
