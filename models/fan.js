'use strict';
module.exports = (sequelize, DataTypes) => {
  var Fan = sequelize.define('Fan', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    genre: DataTypes.STRING
  }, {});
  Fan.associate = function(models) {
    // associations can be defined here
    Fan.hasMany(models.Contribution);
    Fan.belongsToMany(models.Project, {through: models.Contribution});
  };
  return Fan;
};