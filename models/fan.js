'use strict';
module.exports = (sequelize, DataTypes) => {
  var Fan = sequelize.define('Fan', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        is: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        isEmail: true
      }
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    genre: DataTypes.STRING
  }, {});
  Fan.associate = function (models) {
    // associations can be defined here
    Fan.hasMany(models.Contribution);
    Fan.belongsToMany(models.Project, { through: models.Contribution });
  };
  return Fan;
};