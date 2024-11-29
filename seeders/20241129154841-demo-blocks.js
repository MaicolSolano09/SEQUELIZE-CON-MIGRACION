"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "blocks",
      [
        {
          nombre: "mis notas",
          descripcion: "realizando ejercicio de sequalize-cli",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "mis notas2",
          descripcion: "realizando ejercicio de nodejs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blocks',null,{})
  },
};
