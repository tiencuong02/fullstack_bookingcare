'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        // email: DataTypes.STRING,
        // password: DataTypes.STRING,
        // firstName: DataTypes.STRING,
        // lastName: DataTypes.STRING,
        // address: DataTypes.STRING,
        // phonenumber: DataTypes.STRING,
        // gender: DataTypes.BOOLEAN,
        // roleId: DataTypes.STRING,
        // positionId: DataTypes.STRING,
        // Image: DataTypes.STRING,
        email: 'admin@gmail.com',
        password: '123456', 
        firstName: 'TienCuongIt',
        lastName: 'Eric',
        address: 'USA',
        phonenumber: '0353777708',
        gender: 1,
        Image: '',
        roleId: '1',
        positionId: '',
        // typeRole:'ROLE',
        // keyRole: 'R1',
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
