'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var Muso = sequelize.define('Muso', {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    established_year: DataTypes.INTEGER,
    username: {
      type: DataTypes.STRING,
      len: [8, 12]
    },
    password: {
      type: DataTypes.STRING,
      len: [8, 12]
    }
  }, {});
  Muso.associate = function (models) {
    // associations can be defined heres
  };

  Muso.hook('beforeCreate', (user, options) => {
    const saltRounds = 9;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;
  });

  return Muso;
};