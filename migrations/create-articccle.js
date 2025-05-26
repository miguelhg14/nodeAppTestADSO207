'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Articles', {
   {
  "id": 2,
  "title": "La lista definitiva de los personajes de muertos en Juego de Tronos",
  "content": "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  "UserId": null,
  "categories": [
    {
      "id": 1,
      "name": "Tecnología",
      "createdAt": "2022-07-04T02:23:08.000Z",
      "updatedAt": "2022-07-04T02:23:08.000Z",
      "articleCategories": {
        "createdAt": "2022-07-04T02:32:39.000Z",
        "updatedAt": "2022-07-04T02:32:39.000Z",
        "ArticleId": 2,
        "CategoryId": 1
      }
    },
    {
      "id": 2,
      "name": "Entretenimiento",
      "createdAt": "2022-07-04T02:23:08.000Z",
      "updatedAt": "2022-07-04T02:23:08.000Z",
      "articleCategories": {
        "createdAt": "2022-07-04T02:32:39.000Z",
        "updatedAt": "2022-07-04T02:32:39.000Z",
        "ArticleId": 2,
        "CategoryId": 2
      }
    },
    {
      "id": 3,
      "name": "Deportes",
      "createdAt": "2022-07-04T02:23:08.000Z"
    }
  ]
}, 
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Articles');
  }
};