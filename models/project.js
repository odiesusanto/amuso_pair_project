'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    MusoId: DataTypes.INTEGER,
    target: DataTypes.INTEGER,
    min_amount: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.hasMany(models.Fan);
    Project.hasMany(models.Contribution);
    Project.belongsToMany(models.Fan, {through: models.Contribution})
    Project.hasMany(models.Muso);
  };
  return Project;
};