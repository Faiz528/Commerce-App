const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Cart= sequelize.define('commerce', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Price: {type:Sequelize.INTEGER,
       allowNull : false
  },
  Product: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
module.exports = Cart